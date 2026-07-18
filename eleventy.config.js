import {
    IdAttributePlugin,
    InputPathToUrlTransformPlugin,
    HtmlBasePlugin,
} from '@11ty/eleventy'
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import pluginNavigation from '@11ty/eleventy-navigation'
import { EleventyRenderPlugin } from '@11ty/eleventy'
import pluginFilters from './_config/filters.js'
import fontAwesomePlugin from "@11ty/font-awesome";
import { PurgeCSS } from 'purgecss'
import * as fs from 'fs';
import CleanCSS from "clean-css";
import htmlmin from "html-minifier-terser";
import Image from "@11ty/eleventy-img";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {

    eleventyConfig.addPlugin(fontAwesomePlugin);

    // Drafts, see also _data/eleventyDataSchema.js
    eleventyConfig.addPreprocessor('drafts', '*', (data, content) => {
        if (data.draft && process.env.ELEVENTY_RUN_MODE === 'build') {
            return false
        }
    })

    // Copy the contents of the `public` folder to the output folder
    // For example, `./public/css/` ends up in `_site/css/`
    eleventyConfig
        .addPassthroughCopy({
            './public/': '/',
            CNAME: 'CNAME',
        })

    // Run Eleventy when these files change:
    // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

    // Watch content images for the image pipeline.
    eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg}')

    // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
    // Adds the {% css %} paired shortcode
    eleventyConfig.addBundle('css', {
        toFileDirectory: 'dist',
    })
    // Adds the {% js %} paired shortcode
    eleventyConfig.addBundle('js', {
        toFileDirectory: 'dist',
    })

    // Official plugins
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: { tabindex: 0 },
    })
    eleventyConfig.addPlugin(pluginNavigation)
    eleventyConfig.addPlugin(HtmlBasePlugin)
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin)

    // Filters
    eleventyConfig.addPlugin(pluginFilters)

    eleventyConfig.addPlugin(IdAttributePlugin, {
        // by default we use Eleventy's built-in `slugify` filter:
        // slugify: eleventyConfig.getFilter("slugify"),
        // selector: "h1,h2,h3,h4,h5,h6", // default
    })

    // Responsive, optimized <picture> output (webp + original-format
    // fallback, multiple widths, explicit width/height to avoid layout
    // shift) for images referenced via the imgOg frontmatter field —
    // see _includes/image.html. Source images live in public/assets/img/
    // posts/ (passthrough-copied as-is too, for OG/social meta tags,
    // which need one fixed image, not a responsive set).
    eleventyConfig.addAsyncShortcode('optimizedImage', async function (src, alt, cssClass) {
        let metadata = await Image(src, {
            widths: [400, 800, 1200, null],
            formats: ['webp', null],
            outputDir: './_site/assets/img/optimized/',
            urlPath: '/assets/img/optimized/',
            sharpPngOptions: { compressionLevel: 9 },
        });

        return Image.generateHTML(metadata, {
            alt,
            loading: 'lazy',
            decoding: 'async',
            class: cssClass,
            sizes: '(min-width: 992px) 800px, 100vw',
        });
    })

    eleventyConfig.addShortcode('currentBuildDate', () => {
        return new Date().toISOString()
    })

    eleventyConfig.addShortcode('thisYear', () => {
        return new Date().getFullYear();
    })

    eleventyConfig.addFilter('standardFormatDate', (time) => {
        return new Date(time).toLocaleDateString('en-US', {
            timeZone: 'America/Los_Angeles',
        })
    })

    eleventyConfig.addFilter('dateFormat', (time) => {
        return new Date(time).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    });

    eleventyConfig.addFilter('logger', (obj) => {
        console.log('logger output:', obj);
        return '';
    })

    eleventyConfig.addFilter('timeSort', (logs) => {
        if (logs) {
            return logs.sort((a, b) => b.time - a.time)
        }
        return []
    })

    eleventyConfig.addPlugin(EleventyRenderPlugin)

    eleventyConfig.addFilter('encodeParameter', (param) => {
        return encodeURIComponent(param.trim());
    })

    eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

    eleventyConfig.addFilter("includes", function (str, substr) {
        if (typeof str === 'string') {
            return str.includes(substr);
        }
        return false;
    });

    eleventyConfig.addTransform("cssinliner", async function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
            if (!fs.existsSync('scripts/bundle.css')) {
                return content;
            }

            const purgeCSSResults = await new PurgeCSS().purge({
                content: [
                    {
                        raw: content,
                        extension: 'html' // Indicate the content type
                    }
                ],
                css: ['scripts/bundle.css'],
            })

            if (purgeCSSResults && purgeCSSResults[0]) {
                let minifiedCSS = new CleanCSS({}).minify(purgeCSSResults[0].css).styles;
                return content.replace('<!--put inlined css here-->',`<style>${minifiedCSS}</style>`);
            }
		}

		// If not an HTML output, return content as-is
		return content;
	});

    eleventyConfig.addTransform("htmlmin", async function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {

			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});
}

export const config = {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid', '11ty.js'],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // These are all optional:
    dir: {
        input: 'content', // default: "."
        includes: '../_includes', // default: "_includes" (`input` relative)
        data: '../_data', // default: "_data" (`input` relative)
        output: '_site',
    },
}
