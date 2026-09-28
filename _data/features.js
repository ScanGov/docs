import * as fs from 'fs';

export default async function () {
  let localPath = '../scangov-com/_data/features.json';
  if (fs.existsSync(localPath)) {
    return JSON.parse(fs.readFileSync(localPath, 'utf8'));
  }

  let url = 'https://github.com/ScanGov/scangov-com/raw/refs/heads/main/_data/features.json';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  console.log('got ' + url);
  return response.json();
}
