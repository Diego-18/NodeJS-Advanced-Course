const fs = require("fs");

/**
 * Creación del Streams
 * Creation of the Streams
*/
const readStreams = fs.createReadStream("file.txt", {
    encoding: 'utf8'
});

/**
 * Eventos que se pueden escuchar en un ciclo de vida de lectura de un screams 
 * a traves del metodo on
 * (open) -> nos muestra lo que esta sucediento al momento de abrir el archivo
 * (data) -> nos muestra lo que esta sucediendo al momento de leer progresivamente el archivo
 * (close) -> nos muestra lo que esta sucediento al momento de cerrar el archivo
 * (error) -> nos muestra lo que sucede si encuentra un problema al abrir el archivo
*/

/**
 * Events that can be listened to in a scream reading lifecycle 
 * through the on method
 * 
 * (open) -> shows what is happening at the moment of opening the file
 * (data) -> shows us what is happening at the moment the file is being progressively read.
 * (close) -> shows what is happening at the moment of closing the file
 * (error) -> shows what happens if an problem is encountered when opening the file
*/

readStreams.on("open", ()=>{
    console.log('opening file');
}).on("data", ()=>{
    console.log('----');
}).on("close", ()=>{
    console.log('closed file');
}).on("error", ()=>{
    console.log('error in the file');
})

/**
 * Resumen: Los Streams de Lectura aparte de mejorar el rendimiento de nuestra
 * aplicación, nos ayuda a interactuar con el contenido que se esta ejecutando en 
 * nuestra aplicación. 
*/

/**
 * Resumen: Read Streams apart from improving the performance of our application, help us to interact with the
 * application, helps us to interact with the content that is running in our application. 
*/