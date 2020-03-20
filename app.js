const argv = require('./config/yargs').argv;


console.log(argv);

const { crear, actualizar, listar, borrar } = require('./funciones/funciones');

let comando = argv._[0];
let tareas = '';
switch (comando) {
    case 'crear':
        console.log('Crear tarea');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar tarea');
        listar();
        break;
    case 'actualizar':
        console.log('Actualizar tarea');
        actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        console.log('Borrar tarea');
        borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
}