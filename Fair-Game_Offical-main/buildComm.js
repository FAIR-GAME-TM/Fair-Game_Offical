const fs = require('fs');
const path = require('path');

// Define the source and destination directories
const srcDir = path.join(__dirname);  // 'Fair-Game_Offical-main' is the current directory
const distDir = path.join(__dirname, 'dist');  // 'dist' folder will be inside 'Fair-Game_Offical-main'

// Ensure the 'dist' directory exists; create it if necessary
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Example of copying files from the source to the dist folder
fs.readdirSync(srcDir).forEach(file => {
    const srcFilePath = path.join(srcDir, file);
    const distFilePath = path.join(distDir, file);

    // Only copy files (not directories)
    if (fs.lstatSync(srcFilePath).isFile()) {
        fs.copyFileSync(srcFilePath, distFilePath);
    }
});

console.log('Build completed!');
