let delay = 100;
const printWords = function(word) {
  setTimeout(() => {
    process.stdout.write(word);
  }, delay += 200);
};

const characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\  ', '\r/  '];

for (const char of characters) {
  printWords(char);
}