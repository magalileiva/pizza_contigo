function onPassword() {
    const password = document.getElementById("password");    
    if (password.value === "pizzaConmigo"){
        document.getElementById("divLogin").style.display = "none";
        document.getElementById("contenido").style.display = "block";
    }else{
        alert("Contraseña incorrecta")
    }
    password.value = null;
}