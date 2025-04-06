import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToWebp() {
  try {
    const inputPath = path.join(__dirname, 'public', 'profile.jpg');
    const outputPath = path.join(__dirname, 'public', 'profile.webp');
    
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log('Successfully converted profile.jpg to profile.webp');
    
    // Create a low quality placeholder
    await sharp(inputPath)
      .resize(20)
      .blur(5)
      .webp({ quality: 20 })
      .toFile(path.join(__dirname, 'public', 'profile-placeholder.webp'));
    
    console.log('Successfully created low-quality placeholder');
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertToWebp(); 