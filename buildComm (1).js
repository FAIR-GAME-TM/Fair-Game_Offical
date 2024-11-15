const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');  // Source folder (your HTML, CSS, JS files)
const distDir = path.join(__dirname, 'dist'); // Output folder

// Create dist folder if it doesn't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Copy files from src to dist
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = path.join(srcDir, file);
    const distFilePath = path.join(distDir, file);

    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);
    }
});

console.log('Build completed');
