import fs from 'fs';
import path from 'path';

const srcDir = './src/components';
const files = fs.readdirSync(srcDir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    
    let modified = false;
    content = content.replace(/gsap\.from\(\s*(['"][^'"]+['"]),\s*\{([\s\S]+?)\}\s*\);/g, (match, selector, props) => {
      if (!props.includes('opacity: 0')) return match;
      
      let yVal = props.match(/\by:\s*(-?\d+)/);
      yVal = yVal ? yVal[1] : '50';
      
      let newProps = props.split('\n')
        .filter(line => !line.match(/^\s*y:\s*-?\d+,?\s*$/) && !line.match(/^\s*opacity:\s*0,?\s*$/))
        .join('\n')
        .trim();
        
      if (newProps.endsWith(',')) newProps = newProps.slice(0, -1);
                          
      modified = true;
      return `gsap.fromTo(${selector}, { y: ${yVal}, opacity: 0 }, { \n${newProps ? newProps + ',' : ''}\n y: 0, opacity: 1, clearProps: 'all' \n});`;
    });

    if (modified) {
      fs.writeFileSync(path.join(srcDir, file), content, 'utf8');
      console.log(`Updated GSAP config in ${file}`);
    }
  }
});
