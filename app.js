const { crearArchivo } = require('./multiplicar/multiplicar')

let base = 'asd';


crearArchivo(base)
    .then(archivo => console.log(`Archivo crado: ${archivo} `))
    .catch(e => console.log(e));