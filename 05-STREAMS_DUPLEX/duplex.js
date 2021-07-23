const fs = require('fs');
/**
 * Inyectamos Duplex que se encuentra en la libreria stream de node.
 * We inject Duplex found in the node stream library.
*/
const { Duplex } = require('stream');

const readStreams = fs.createReadStream('base.txt');
const writeStreams = fs.createWriteStream('destination.txt');

/**
 * Creamos una nueva instancia de 'Duplex' y le definimos obligatoriamente dos metodos que son write y read.
 * We create a new instance of 'Duplex' and we define two mandatory methods which are write and read.
 * */
const report = new Duplex ({
    /**
     * data -> Los datos que estamos recibiendo (The data we are receiving)
     * encode -> La codificacion que tiene los datos que estamos recibiendo (The encoding of the data that we are receiving)
     * callback -> para poder mantener la información fluyendo y no interrumpir el "pipe" o el conducto que estamos creando de datos
     * (to keep the information flowing and not interrupt the "pipe" or the data pipeline we are creating).
    */
    write(data, encode, callback){
        //console.log(data)
        // console.log(data.toString())
        callback();
        this.push(data)
    },
    /**
     * size -> Nos va a dar la información del tamaño del archivo que se está escribiendo.
     * (It will give us information about the size of the file being written.)
    */
    read(size){
        console.log('bytes: '+size)
    }
});

/**
 * Colocamos un nuevo pipe para que ejecute la verificacion antes de escrbir la informacion en el otro archivo. 
 * We place a new pipe to execute the verification before writing the information in the other file. 
*/
readStreams.pipe(report).pipe(writeStreams);

/**
 * Los "streams" de tipo Duplex son dobles y pueden utilizar tanto lectura como escritura. 
 * Son particularmente útiles para inyectarlos en un proceso intermedio.
 * Como por ejemplo el saber si existen vulnerabilidades en un archivo antes de pasarlo a otro archivo.
 * 
 * Duplex streams are dual and can use both read and write. 
 * They are particularly useful for injection into an intermediate process.
 * Such as knowing if there are vulnerabilities in a file before passing it to another file.
*/