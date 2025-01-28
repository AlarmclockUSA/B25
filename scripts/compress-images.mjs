import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const PUBLIC_DIR = './public';
const QUALITY = 80; // Adjust quality (0-100)
const MAX_WIDTH = 1920; // Max width for large images

async function compressImages() {
  try {
    const files = await readdir(PUBLIC_DIR);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = join(PUBLIC_DIR, file);
        const outputPath = join(PUBLIC_DIR, `compressed-${file}`);
        
        console.log(`Compressing ${file}...`);
        
        await sharp(inputPath)
          .resize(MAX_WIDTH, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ quality: QUALITY, mozjpeg: true })
          .toFile(outputPath);
          
        console.log(`✓ Compressed ${file}`);
      }
    }
    
    console.log('All images compressed successfully!');
  } catch (error) {
    console.error('Error compressing images:', error);
  }
}

compressImages(); 