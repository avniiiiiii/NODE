const path = require("path");
console.log(path.sep);
const filepath = "/content/subfolder/text.txt";
console.log(path.basename(filepath, ".txt"));
console.log(path.join(filepath));
console.log(path.resolve(__dirname, filepath));
