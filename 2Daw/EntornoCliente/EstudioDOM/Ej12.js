/*
Crear una aplicación de lista de tareas que permita a los usuarios agregar nuevas tareas ingresando 
texto en un campo de entrada y presionando un botón para agregarlas. 
Cada tarea debe aparecer como un elemento en una lista con un checkbox junto a ella. 
Los usuarios deben poder marcar una tarea como completada al hacer clic en su checkbox, lo que la tachará 
visualmente. Además, cada tarea debe tener un botón de eliminar para permitir a los usuarios eliminar 
la tarea de la lista. Todos estos cambios deben reflejarse dinámicamente en la interfaz de usuario 
sin necesidad de recargar la página.
*/
var contadorTarea=0;
function agregar() {
    // Obtener el valor del campo de entrada
    let nuevaTarea = document.getElementById("introducir").value;
    // Crear un nuevo elemento <li>
    let crearli = document.createElement("li");
    // Asignar un ID al elemento (corregido)
    crearli.setAttribute("id", contadorTarea);
    // Incrementar el contador (supongo que tienes una variable llamada contadorTarea)
    contadorTarea++;
    // Asignar el texto al elemento <li>
    crearli.innerText = nuevaTarea;
    
    // Crear un elemento <input> de tipo checkbox (aunque no lo estás agregando al DOM en este código)
    let crearCheckbox = document.createElement("input");
    crearCheckbox.type = "checkbox";
    // Agregar el elemento <li> a la lista de tareas (supongo que tienes un elemento con el ID "mostrarTareas")
    document.getElementById("mostrarTareas").appendChild(crearli);
}

function eliminar(){

}