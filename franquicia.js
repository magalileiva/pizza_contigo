
var mensajesFranquicia = [];

function processForm(e) {
    if (localStorage.getItem("franquicias")) {
        mensajesFranquicia = JSON.parse(localStorage.getItem("franquicias"));
    }

    const nombre = e.currentTarget[0].value;
    const email = e.currentTarget[1].value;
    const telefono = e.currentTarget[2].value;
    const mensaje = e.currentTarget[4].value;
    const capitalSelected = e.currentTarget[3].value;
    const capital = e.currentTarget[3][capitalSelected].text;
    const mensajeFranquicia = new Object();
    mensajeFranquicia.nombre = nombre;
    mensajeFranquicia.email = email;
    mensajeFranquicia.telefono = telefono;
    mensajeFranquicia.mensaje = mensaje;
    mensajeFranquicia.capital = capital;
    mensajesFranquicia.push(mensajeFranquicia);

    localStorage.setItem("franquicias", JSON.stringify(mensajesFranquicia));
}

var form = document.getElementById('contact-us');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}