// Declaración de variables globales
let number = 0; // Variable para almacenar el índice del video actual
let data = []; // Arreglo para almacenar los datos obtenidos del archivo JSON
const button = document.getElementById('btn'); // Referencia al botón en el HTML
const titleArea = document.getElementById("title"); // Referencia al área del título en el HTML
const contentArea = document.getElementById("content"); // Referencia al área del contenido en el HTML
const videoArea = document.getElementById("video"); // Referencia al elemento iframe del video en el HTML

// Función para obtener datos del archivo JSON
function getData() {
    const request = new XMLHttpRequest(); // Crear nueva solicitud XMLHttpRequest
    // Función que se ejecuta cuando el estado de la solicitud cambia
    request.onreadystatechange = function() {
        if (request.readyState == 4) { // Estado DONE (4) indica que la operación está completa
            if (request.status == 200) { // Código de estado 200 indica éxito en la solicitud
                console.log(request.response); // Mostrar la respuesta en la consola (debugging)
                data = request.response; // Asignar la respuesta (datos JSON) a la variable data
            }
        }
    };
    request.open("GET", "ajax.json"); // Configurar la solicitud GET para el archivo ajax.json
    request.responseType = "json"; // Especificar que la respuesta debe ser interpretada como JSON
    request.send(null); // Enviar la solicitud HTTP sin datos adicionales
}

// Función para cambiar el video al hacer clic en el botón
function changeVideo() {
    getData(); // Llamar a la función getData para obtener los datos del archivo JSON
    button.addEventListener('click', e => { // Agregar un evento de clic al botón
        // Actualizar el contenido dinámicamente con los datos del arreglo data
        titleArea.innerHTML = data[number].title; // Actualizar el título del video
        contentArea.innerHTML = data[number].content; // Actualizar el contenido del video
        videoArea.setAttribute("src", data[number].url); // Actualizar la URL del video en el iframe
        number == 2 ? number = 0 : number++; // Cambiar al siguiente video, reiniciando en 0 si llega al final del arreglo
    });
}

window.onload = changeVideo; // Ejecutar la función changeVideo cuando la ventana se cargue completamente
