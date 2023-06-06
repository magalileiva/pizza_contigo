if(document.querySelector('#container-slider')){
   setInterval('fntExecuteSlide("next")',5000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
   let link = document.querySelectorAll(".listslider li a");
   link.forEach(function(link) {
      link.addEventListener('click', function(e){
         e.preventDefault();
         let item = this.getAttribute('itlist');
         let arrItem = item.split("_");
         fntExecuteSlide(arrItem[1]);
         return false;
      });
    });
}

function fntExecuteSlide(side){
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for(var i=0; i<elements.length;i++){

        if(elements[i].style.opacity==1){
            curElement = i;
            break;
        }
    }
    if(side == 'prev' || side == 'next'){

        if(side=="prev"){
            nextElement = (curElement == 0)?elements.length -1:curElement -1;
        }else{
            nextElement = (curElement == elements.length -1)?0:curElement +1;
        }
    }else{
        nextElement = side;
        side = (curElement > nextElement)?'prev':'next';

    }
    //RESALTA LOS PUNTOS
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity=0;
    elements[curElement].style.zIndex =0;
    elements[nextElement].style.opacity=1;
    elements[nextElement].style.zIndex =1;
}


var contactos = [];

function processForm(e) {
    if (localStorage.getItem("contactos")) {
        contactos = JSON.parse(localStorage.getItem("contactos"));
    }else{
        var contactos = [];
    }

    const nombre = e.currentTarget[0].value;
    const email = e.currentTarget[1].value;
    const telefono = e.currentTarget[2].value;
    const mensajeTexto = e.currentTarget[3].value;
    const mensaje = new Object();
    mensaje.nombre = nombre;
    mensaje.email = email;
    mensaje.telefono = telefono;
    mensaje.mensaje = mensajeTexto;
    contactos.push(mensaje);

    localStorage.setItem("contactos", JSON.stringify(contactos));
}

var form = document.getElementById('contact-us');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}