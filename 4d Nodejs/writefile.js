const fs=require('fs');
content="This is new line";
fs.writeFileSync("notes.txt",content);
console.log("File Written Successfully");