const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Fair-Game_Offical-main');  // Source folder
const distDir = path.join(__dirname, 'Fair-Game_Offical-main', 'dist');  // Output folder

// Create dist folder if it doesn't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Copy all files from the source folder to the dist folder (this is just an example)
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = path.join(srcDir, file);
    const distFilePath = path.join(distDir, file);

    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);
    }
});

console.log('Build completed!');
