const mostrarSoluciones = ()=>{
    let lista = document.getElementById("lista");
    
    let itemOne = document.createElement("li");
    let itemTwo = document.createElement("li");
    itemOne.innerText = "solucion1";
    itemTwo.innerText = "solucion2";
    lista.append(itemOne,itemTwo)
}