import fs from 'fs';
import path from 'path';

const srcDir = './src';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let modified = false;
      
      if (content.includes('slateWhite')) {
        content = content.replace(/slateWhite/g, 'slate-white');
        modified = true;
      }
      if (content.includes('nearWhite')) {
        content = content.replace(/nearWhite/g, 'near-white');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Fixed colors in ${fullPath}`);
      }
    }
  }
}

replaceInDir(srcDir);
