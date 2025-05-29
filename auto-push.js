import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let cooldown = false;

if (!cooldown) {
  cooldown = true;
  const commitMessage = `auto: ${new Date().toLocaleString()}`;
  
  exec(`git add . && git commit -m "${commitMessage}" && git push`, { cwd: __dirname }, (err, stdout, stderr) => {
    if (err) {
      console.error('❌ Git push failed:', stderr.trim());
    } else {
      console.log('✅ Auto pushed to GitHub at', commitMessage);
      console.log(stdout.trim());
    }
    setTimeout(() => {
      cooldown = false;
    }, 3000); // Wait 3 seconds before allowing next push
  });
}
