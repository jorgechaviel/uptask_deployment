const Sequilize = require('sequelize');
const db = require('../config/db');
const Proyectos  = require('./Proyectos');

const Tareas = db.define('tareas',{
    id: {
        type: Sequilize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    tarea: Sequilize.STRING(100),
    estado: Sequilize.INTEGER(1)
});
Tareas.belongsTo(Proyectos);

module.exports = Tareas;