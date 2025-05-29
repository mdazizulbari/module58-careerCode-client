import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commitMessage = `auto: ${new Date().toLocaleString()}`;

exec(`git add . && git commit -m "${commitMessage}" && git push`, { cwd: __dirname }, (err, stdout, stderr) => {
  if (err) {
    console.error('❌ Git push failed:', stderr.trim());
  } else {
    console.log('✅ Auto pushed to GitHub at', commitMessage);
    console.log(stdout.trim());
  }
});
