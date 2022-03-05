const archivoTareas = require("./tareas");

const accion = process.argv[2]; //la variable accion contiene la 3 palabra que escribiremos en la cosola (Ej: Node app.js listar)

const tareas = archivoTareas.leerJSON();

switch (accion) {
    case "listar":
        console.log("Listado de tareas");

        tareas.forEach(function(tarea, i) {
            console.log((i+1) + ". " + tarea.titulo + " - " + tarea.estado);
        });
        break;

    case undefined:
        console.log("Tenés que pasarme una acción");
        break;

    case "guardar":
        console.log("Nueva tarea creada");
        console.log("------------------");

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: "pendiente",
        };

        archivoTareas.guardarTareas(tarea);

        console.log(tarea.titulo + " -> " + tarea.estado);

        break;
    case "filtrar":
        let estado = process.argv[3];
        console.log("Estado de la tarea?");
        console.log("------------------");
        console.log(
            tareas.filter((tarea) => {
                if (tarea.estado == estado) {
                    console.log(tarea);
                }
            })
        );
        break;
    default:
        console.log("No entiendo qué me estás pidiendo");
        console.log("Las acciones disponibles son: listar, filtrar, o guardar");
        break;
}