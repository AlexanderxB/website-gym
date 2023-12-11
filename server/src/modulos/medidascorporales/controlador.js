const db = require('../../DB_medidascorporales/mysql');

const TABLA = 'medidascorporales';

function todos () {
    return db.todos(TABLA);
}

function uno (Cedula) {
    return db.uno(TABLA,Cedula);
}

function insertar (body) {
    return db.insertar(TABLA,body);
}

function actualizar(body) {
    return db.actualizar(TABLA,body);
}

function eliminar (body) {
    return db.eliminar(TABLA,body);
}

module.exports = {
    todos,
    uno,
    insertar,
    actualizar,
    eliminar,
}