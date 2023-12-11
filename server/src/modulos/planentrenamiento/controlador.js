const db = require('../../DB_planentrenamiento/mysql');

const TABLA = 'planentrenamiento';

function todos () {
    return db.todos(TABLA);
}

function uno (ID_PlanEntrenamiento) {
    return db.uno(TABLA,ID_PlanEntrenamiento);
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