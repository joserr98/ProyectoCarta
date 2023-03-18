const showAttachedBox = (option) =>{

    if (option.value == "curriculum") {
        console.log('hola');
        document.getElementById("attached-file").style.display = "flex";
    } else {
        document.getElementById("attached-file").style.display = "none";
    }
}


// const numero = document.querySelector('.hidden-title-menu').id;

// const imagenes1 = document.querySelector("#title-menu-1");
// const imagenes2 = document.querySelector("#title-menu-2");
// const imagenes3 = document.querySelector("#title-menu-3");
// const imagenes4 = document.querySelector("#title-menu-4");
// const imagenes5 = document.querySelector("#title-menu-5");
// const imagenes6 = document.querySelector("#title-menu-6");
// id: title-menu-1
// class: hidden-title-menu



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



// imagenes1.addEventListener("mouseover", function(e){
//     document.querySelector(".title-menu-1").style.display="flex";
// });
// imagenes1.addEventListener("mouseout", function(e){
//     document.querySelector(".title-menu-1").style.display="none";
// });
// imagenes2.addEventListener("mouseover", function(e){
//     document.querySelector(".title-menu-2").style.display="flex";
// });
// imagenes2.addEventListener("mouseout", function(e){
//     document.querySelector(".title-menu-2").style.display="none";
// });
// imagenes3.addEventListener("mouseover", function(e){
//     document.querySelector(".title-menu-3").style.display="flex";
// });
// imagenes3.addEventListener("mouseout", function(e){
//     document.querySelector(".title-menu-3").style.display="none";
// });
// imagenes4.addEventListener("mouseover", function(e){
//     document.querySelector(".title-menu-4").style.display="flex";
// });
// imagenes4.addEventListener("mouseout", function(e){
//     document.querySelector(".title-menu-4").style.display="none";
// });
// imagenes5.addEventListener("mouseover", function(e){
//     document.querySelector(".title-menu-5").style.display="flex";
// });
// imagenes5.addEventListener("mouseout", function(e){
//     document.querySelector(".title-menu-5").style.display="none";
// });
// imagenes6.addEventListener("mouseover", function(e){
//     document.querySelector(".title-menu-6").style.display="flex";
// });
// imagenes6.addEventListener("mouseout", function(e){
//     document.querySelector(".title-menu-6").style.display="none";
// });
