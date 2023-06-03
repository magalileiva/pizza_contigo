
var mensajesFranquicia = [];

function processForm(e) {
    if (localStorage.getItem("test")) {
        mensajesFranquicia = JSON.parse(localStorage.getItem("test"));
    }

    const nombre = e.currentTarget[0].value;
    const email = e.currentTarget[1].value;
    const telefono = e.currentTarget[2].value;
    const mensaje = e.currentTarget[3].value;
    const capital = e.currentTarget[4].value; 
    const mensajeFranquicia = new Object();
    mensajeFranquicia.nombre = nombre;
    mensajeFranquicia.email = email;
    mensajeFranquicia.telefono = telefono;
    mensajeFranquicia.mensaje = mensaje;
    mensajeFranquicia.capital = capital;
    mensajesFranquicia.push(mensajeFranquicia);

    localStorage.setItem("test", JSON.stringify(mensajesFranquicia));
}

var form = document.getElementById('contact-us');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}