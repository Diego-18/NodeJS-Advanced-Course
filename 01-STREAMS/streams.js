const fs = require('fs');

console.time('request time');

/*
 * VERSION 1
*/
// for(let i=0; i<= 10; i++){
//     fs.readFileSync('file.txt', 'utf8');
// }

/* 
 * VERSION 2
*/
for(let i=0; i<= 10; i++){
   const streamWritter = fs.createReadStream('file.txt', {
       encoding: 'utf-8'
   });
}

console.timeEnd('request time');

/*
 * Español
 *  VERSION 1
 *  Sin el Stream de forma tradicional el archivo, 
 *  despues que termine de leer todo el archivo 
 *  es que lo ejecuta. 

 * VERSION 2
 * Con el Stream el archivo se lee progrsivamente, 
 * es decir a medida que va leyendo el archivo va ejecutandolo 
 * mejorando el tiempo de respuesta de la aplicacion. 

 * Resumen: Los Stream ayudan a mejorar el tiempo de respuesta de una aplicacion de node.
*/

/*
 * Ingles 
 *
 *  VERSION 1
 *  Without the Stream in the traditional way the file
 *  after it finishes reading the whole file is 
 *  that it executes it. 

 * VERSION 2
 * With the Stream the file is read progressively,
 * that is to say, as it reads the file it executes it 
 * improving the response time of the application. 

 * Resumen: The stream helps to improve the response time of a node application.
*/