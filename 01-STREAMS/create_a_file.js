const fs = require('fs');
const file = fs.createWriteStream('file.txt');


for(let i=0; i<= 1e6; i++){
    file.write('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
}

file.end();