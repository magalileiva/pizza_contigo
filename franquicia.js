
var mensajesFranquicia = [];

function processForm(e) {
    if (localStorage.getItem("test")) {
        mensajesFranquicia = JSON.parse(localStorage.getItem("test"));
    }

    const nombre = e.currentTarget[0].value;
    const email = e.currentTarget[1].value;
    const telefono = e.currentTarget[2].value;
    const mensaje = e.currentTarget[3].value;
    const mensajeFranquicia = new Object();
    mensajeFranquicia.nombre = nombre;
    mensajeFranquicia.email = email;
    mensajeFranquicia.telefono = telefono;
    mensajeFranquicia.mensaje = mensaje;
    mensajesFranquicia.push(mensajeFranquicia);

    localStorage.setItem("test", JSON.stringify(mensajesFranquicia));

    for(var i=0; i<mensajesFranquicia.length; i++){
        console.log(mensajesFranquicia[i].nombre);
    }
}

var form = document.getElementById('contact-us');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}