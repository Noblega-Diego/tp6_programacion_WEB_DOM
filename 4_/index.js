const cambiarColor = () => {
    let parrafos = [...document.getElementsByTagName("p")]
    parrafos.forEach( parrafo =>{
        parrafo.style = "color: blue;";
    })
}