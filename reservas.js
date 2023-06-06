
var mensajesReservas = [];

function processForm(e) {
    if (localStorage.getItem("reservas")) {
        mensajesReservas = JSON.parse(localStorage.getItem("reservas"));
    }

    const nombre = e.currentTarget[3].value;
    const email = e.currentTarget[4].value;
    const telefono = e.currentTarget[5].value;
    const dia = e.currentTarget[0].value;
    const hora = e.currentTarget[1].value; 
    const comensales = e.currentTarget[2].value;
    const mensajeReserva = new Object();
    
    mensajeReserva.nombre = nombre;
    mensajeReserva.email = email;
    mensajeReserva.telefono = telefono;
    mensajeReserva.dia = dia;
    mensajeReserva.hora = hora;
    mensajeReserva.comensales = comensales;
    mensajesReservas.push(mensajeReserva);

    localStorage.setItem("reservas", JSON.stringify(mensajesReservas));
}

var form = document.getElementById('reservas');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}