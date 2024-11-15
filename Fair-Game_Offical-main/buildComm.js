const fs = require('fs');
const pathModule = require('path');

// Adjust paths to reflect the subfolder structure
const srcDir = pathModule.join(__dirname, 'Fair-Game_Offical-main');  // Source folder inside subfolder
const distDir = pathModule.join(__dirname, 'Fair-Game_Offical-main', 'dist');  // Output folder inside subfolder
const distPath = pathModule.join(__dirname, 'Fair-Game_Offical-main', 'dist');  // Path to dist folder

// Create dist folder if it does not exist
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });  // Use recursive in case the parent folders don't exist
}

// Copy all files from the source folder to the dist folder
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = pathModule.join(srcDir, file);
    const distFilePath = pathModule.join(distDir, file);

    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);  // Copy the files from srcDir to distDir
    }
});

console.log('Build completed!');
