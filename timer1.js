'use strict';

for (let i = 2; i < process.argv.length; i++) {
  if (!process.argv[i] || process.argv[i] < 0 || isNaN(process.argv[i])) {

  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, process.argv[i] * 100);

}
