import { exec } from 'child_process';
import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);
const gitLockFile = join('.git', 'index.lock');
const date = new Date().toLocaleString();

async function run() {
  if (existsSync(gitLockFile)) {
    console.warn('⚠️ Git lock found. Removing it...');
    try {
      unlinkSync(gitLockFile);
      console.log('✅ Removed .git/index.lock');
    } catch (err) {
      console.error('❌ Failed to remove lock file:', err.message);
      // Fix: if "process" is undefined, you’re not in Node — but you're in Node, right?
      // So just guard it like this:
      if (typeof process !== 'undefined') process.exit(1);
      return;
    }
  }

  try {
    const gitCommand = `git add . && git commit -m "auto: ${date}" && git push`;
    const { stdout, stderr } = await execAsync(gitCommand);

    console.log(`✅ Auto pushed to GitHub at ${date}`);
    console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error('❌ Git push failed:\n', error.stderr || error.message);
  }
}

run();
