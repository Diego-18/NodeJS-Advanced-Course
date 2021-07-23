const fs = require("fs");

let content = '1234567890';
let iterations = 15;

/**
 * Streams de Escritura
 * Writing Streams
*/

const writingStreams = fs.createWriteStream("file2.txt");

for (let i = 0; i < iterations; i++){
    content += content;

    writingStreams.write(content, res =>{
        console.log('...');
    });
}

fs.writeFile('file.txt', content, ()=>{
    console.log('direct writing completed');
});

/**
 * Definiendo el streams de escritura 
 * a medida que se vaya ejecutando el bucle
 * vamos a ir escribiendo la informacion progresivamente 
 * lo que permite generar una conexion en tiempo real
 * dentro de nuestra aplicacion.
 * 
*/

/**
 * Defining the writing streams 
 * as the loop is executed 
 * we are going to write the information progressively what allows to 
 * generate a connection in real time within 
 * our application.
*/