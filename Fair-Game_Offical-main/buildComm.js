const fs = require('fs');
const path = require('path');

function buildProject() {
    const srcDir = path.resolve(__dirname, 'src');
    const distDir = path.resolve(__dirname, 'dist');

    // Ensure the dist directory exists
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    // Example: Copy all files from src to dist
    fs.readdirSync(srcDir).forEach(file => {
        const srcFile = path.join(srcDir, file);
        const destFile = path.join(distDir, file);

        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied ${srcFile} to ${destFile}`);
    });

    console.log('Build complete!');
}

buildProject();
