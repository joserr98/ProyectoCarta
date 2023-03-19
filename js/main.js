
// Permite añadir un archivo si se selecciona la opción curriculum.
const showAttachedBox = (option) =>{

    if (option.value == "curriculum") {
        console.log('hola');
        document.getElementById("attached-file").style.display = "flex";
    } else {
        document.getElementById("attached-file").style.display = "none";
    }
}


// Abre y cierra el navbar
const toggleNavbar = () => {
    const navbarMenu = document.querySelector(".navbar-menu");
    const toggler = document.querySelector(".navbar-toggler-icon");
    if (navbarMenu.style.display == 'none'){
        navbarMenu.style.display = "flex";
    } else {
        navbarMenu.style.display = "none";
    }
}

// Hace que a cada imagen le salga su título en el menú.
for (let i = 1; i < 7; i++){
    contador = i-1;
    let imagenes = document.getElementsByClassName("menu-image")[contador];
    imagenes.addEventListener("mouseover", function(){
        document.querySelector(`.title-menu-${i}`).style.display="flex";
    });
    imagenes.addEventListener("mouseout", function(){
        document.querySelector(`.title-menu-${i}`).style.display="none";
    });
}



