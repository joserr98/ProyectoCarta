const showAttachedBox = (option) =>{

    if (option.value == "curriculum") {
        console.log('hola');
        document.getElementById("attached-file").style.display = "flex";
    } else {
        document.getElementById("attached-file").style.display = "none";
    }
}

const columnsOrRows = () =>{
    if ($(window).width() < '730');
}