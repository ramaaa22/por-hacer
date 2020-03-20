const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    default: true,
    alias: 'c'
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea',
        descripcion)
    .command('borrar', 'Borra una tarea',
        descripcion)
    .command('actualizar', 'Actualiza una tarea como hecha', {
        descripcion,
        completado
    })
    .argv;

module.exports = {
    argv
}