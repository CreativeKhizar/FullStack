const fs=require('fs');
const url=require('url');
buf_data=fs.readFileSync("notes.txt");
console.log(buf_data.toString());
document.writeLine(buf_data.toString());