const argv = process.argv.slice(2).filter(value => !(isNaN(value)) || value > 0);

for (let i = 0; i < argv.length; i++) {
  setTimeout(() => process.stdout.write('\x07'), argv[i] * 1000)
}