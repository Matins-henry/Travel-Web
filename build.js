const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Ensure the dist directory exists
fs.ensureDirSync('dist');
fs.ensureDirSync('dist/css');

// Build CSS with Tailwind
console.log('Building CSS...');
execSync('npx tailwindcss -i ./src/input.css -o ./dist/css/output.css --minify', { stdio: 'inherit' });

// Copy HTML files
console.log('Copying HTML files...');
fs.copySync('src', 'dist', {
    filter: (src) => {
        return path.extname(src) === '.html' || fs.statSync(src).isDirectory();
    }
});

// Copy assets
console.log('Copying assets...');
if (fs.existsSync('img')) {
    fs.copySync('img', 'dist/img');
}
if (fs.existsSync('video')) {
    fs.copySync('video', 'dist/video');
}

console.log('Build completed successfully!');
