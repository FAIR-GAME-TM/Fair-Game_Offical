const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Create dist folder if it doesn't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Copy all files from src to dist
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = path.join(srcDir, file);
    const distFilePath = path.join(distDir, file);

    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);
        console.log(`Copied ${file} to dist/`);
    }
});

console.log('Build complete!');
