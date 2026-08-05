const botonTema = document.querySelector("#btn-tema");
const cuerpo = document.body;
function cambiarTema() {
    cuerpo.classList.toggle("oscuro");
    if (cuerpo.classList.contains("oscuro")) {
        botonTema.textContent = " Modo Claro";
    } else {
        botonTema.textContent = " Modo Oscuro";
    }
}
botonTema.addEventListener("click", cambiarTema);
const formulario = document.querySelector("#form-contacto");
const respuesta = document.querySelector("#respuesta");
function enviarFormulario(event) {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const mensaje = document.querySelector("#mensaje").value;
    if (nombre === "") {
        respuesta.textContent = "Por favor ingrese su nombre.";
        respuesta.classList.add("error");
        respuesta.classList.remove("exito");
    } else if (correo.includes("@") === false) {
        respuesta.textContent = "Ingrese un correo válido.";
        respuesta.classList.add("error");
        respuesta.classList.remove("exito");
    } else if (mensaje === "") {
        respuesta.textContent = "Escriba un mensaje.";
        respuesta.classList.add("error");
        respuesta.classList.remove("exito");
    } else {
        respuesta.textContent = "¡Mensaje enviado correctamente! Gracias por contactarnos.";
        respuesta.classList.add("exito");
        respuesta.classList.remove("error");
        formulario.reset();
    }
}
formulario.addEventListener("submit", enviarFormulario);