//guardar el estado (columna activa)
let columnaActiva = 1;

//Selecionar las columnas
//debido que seleccionamos varias columnas 
//la constante columnas se vuelve un  arreglo
const columnas  = document.querySelectorAll(".columna");

//items: es la columna que se elige
//indice: es el numero de columna que se selecciona comienza del 0,1,2
columnas.forEach((items,indice)=>{

    items.addEventListener("click",function(){
        console.log(items,indice);
        cambiarColumna(indice);
    })

});

//cambiar el estado de las columnas
function cambiarColumna(indice){
    //Aqui estamos removiendo la class "activa" que tiene la columna 1 
    columnas[columnaActiva].classList.remove("activa")
    //esta poniendo la class "activa" a una columna que su indice esta activo
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}