const fs = require('fs');
const path = require('path');

// Set up directories
const srcDir = path.join(__dirname);  // Current folder
const distDir = path.join(__dirname, 'dist');  // Inside current folder, go to 'dist'

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy all files from the source folder to the dist folder
fs.readdirSync(srcDir).forEach(file => {
  const srcFilePath = path.join(srcDir, file);
  const distFilePath = path.join(distDir, file);

  if (fs.lstatSync(srcFilePath).isFile()) {
    fs.copyFileSync(srcFilePath, distFilePath);
  }
});

console.log('Build completed!');
