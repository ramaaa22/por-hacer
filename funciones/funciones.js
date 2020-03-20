const fs = require('fs');
const color = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require(`../db/data.json`);
    } catch (error) {
        listadoPorHacer = [];
    }

}

let crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

let listar = () => {
    cargarDB();
    console.log('=======Por hacer======='.green);
    for (let i = 0; i < listadoPorHacer.length; i++) {
        console.log(`${listadoPorHacer[i].descripcion}. Estado: ${listadoPorHacer[i].completado}`);
        console.log('----------------------'.red);
    }
    console.log('======================='.green);
}

let actualizar = (descripcionTarea, estado) => {
    cargarDB();
    //let resultado = listadoPorHacer.find(tarea => tarea.descripcion === descripcionTarea);
    let resultado = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcionTarea)
    console.log(resultado);
    if (resultado != -1) {
        listadoPorHacer[resultado].completado = estado;
        guardarDB()
    } else
        console.log(`La tarea ${descripcionTarea} no existe`);
}


let borrar = (descripcionTarea) => {
    cargarDB();
    let resultado = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcionTarea);
    if (resultado != -1) {
        listadoPorHacer.splice(resultado, 1);
        guardarDB()
    } else
        console.log(`La tarea ${descripcionTarea} no existe`);


}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}