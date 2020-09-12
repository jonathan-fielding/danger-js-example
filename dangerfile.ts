import {warn, danger} from "danger"

// Always update package-lock when you install a new module
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('package-lock.json');

if (packageChanged && !lockfileChanged) {
  warn('Changes were made to package.json, but not to package-lock.json - <i>Perhaps you need to run `npm install`</i>');
}