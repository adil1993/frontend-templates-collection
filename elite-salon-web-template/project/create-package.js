import fs from 'fs';
import archiver from 'archiver';
import path from 'path';

// Create a file to stream archive data to
const output = fs.createWriteStream('elite-salon-website-template.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('✅ Package created successfully!');
  console.log(`📦 Total size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  console.log('🚀 Ready to upload to Gumroad!');
});

// Handle errors
archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files and directories
const filesToInclude = [
  'src/',
  'public/',
  'package.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'vite.config.ts',
  'tailwind.config.js',
  'postcss.config.js',
  'eslint.config.js',
  'index.html',
  'README.md',
  'SETUP-GUIDE.md',
  'CUSTOMIZATION-GUIDE.md',
  'DEPLOYMENT-GUIDE.md',
  'LICENSE.txt'
];

console.log('📦 Creating template package...');

filesToInclude.forEach(item => {
  const itemPath = path.resolve(item);
  
  if (fs.existsSync(itemPath)) {
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      archive.directory(item, item);
      console.log(`📁 Added directory: ${item}`);
    } else {
      archive.file(item, { name: item });
      console.log(`📄 Added file: ${item}`);
    }
  } else {
    console.log(`⚠️  Skipped (not found): ${item}`);
  }
});

// Finalize the archive
archive.finalize();