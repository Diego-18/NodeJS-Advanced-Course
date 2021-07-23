const fs = require("fs");

const readStreams = fs.createReadStream("origin.txt");
const writeStreams = fs.createWriteStream("destination.txt");

readStreams.pipe(writeStreams);

readStreams.on('end', () => {
    console.log('success process');
});

/**
 * Los "pipes" funcionan como una tubería,
 * si pensamos que el concepto de un "stream" es un flujo de datos, 
 * el "pipe", como la tubería que es, 
 * nos permite enviar desde un tipo de "stream" a otro.
*/

/**
 * Pipes work like a pipe, 
 * if we think that the concept of a stream is a data flow, 
 * the pipe, as the pipe that it is, 
 * allows us to send from one type of stream to another.
*/