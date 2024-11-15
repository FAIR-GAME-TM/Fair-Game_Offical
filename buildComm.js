const fs = require('fs-extra');

async function build() {
  try {
    console.log('Building the project...');
    await fs.copy('src', 'dist'); // Example: copy files from `src` to `dist`
    console.log('Build complete!');
  } catch (err) {
    console.error('Build failed:', err);
  }
}

build();
