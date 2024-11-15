if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}
const fs = require('fs');
const pathModule = require('path');


// Adjust paths to reflect the subfolder structure
const srcDir = pathModule.join(__dirname, 'Fair-Game_Offical-main');  // Source folder
const distDir = pathModule.join(__dirname, 'Fair-Game_Offical-main', 'dist');  // Output folder
const distPath = './Fair-Game_Offical-main/dist';  // Directory for output


// Copy all files from the source folder to the dist folder
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = pathModule.join(srcDir, file);
    const distFilePath = pathModule.join(distDir, file);

    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);
    }
});

console.log('Build completed!');
