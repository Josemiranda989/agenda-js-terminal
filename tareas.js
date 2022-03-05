const fs = require("fs");

let archivoTareas = {
    archivo: "tareas.json",
    leerJSON: function() {
        return JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
    },
    escribirJSON: function(texto) {
        fs.writeFileSync(this.archivo, JSON.stringify(texto, null, " "));
    },
    guardarTareas: function(tarea) {
        let tareas = this.leerJSON(); //creo una variable que aloja el archivo de json convertido en objeto
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado: function(estado) {
        let tareas = this.leerJSON();
        tareas.filter((tarea) => tarea.estado == estado);
    },
};

module.exports = archivoTareas;