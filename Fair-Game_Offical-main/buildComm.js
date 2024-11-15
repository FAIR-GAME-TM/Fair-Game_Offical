const fs = require('fs');
const pathModule = require('path');  // Rename this to avoid conflict

const srcDir = pathModule.join(__dirname, 'Fair-Game_Offical-main');  // Source folder
const distDir = pathModule.join(__dirname, 'Fair-Game_Offical-main', 'dist');  // Output folder

const distPath = './dist';  // Rename the variable to avoid conflict with 'pathModule'

if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

// Copy all files from the source folder to the dist folder (this is just an example)
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = pathModule.join(srcDir, file);
    const distFilePath = pathModule.join(distDir, file);

    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);
    }
});

console.log('Build completed!');
