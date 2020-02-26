function mostrar()
{


var repeticiones = parseInt(prompt("Ingrese un numero de repeticiones"));

while(isNaN(repeticiones)) {

    repeticiones = parseInt(prompt("Ingrese un numero de repeticiones"));
}

for(var i=0; i < repeticiones; i++){

document.write(i+ ") " + "Hola UTN FRA </br>")

}




/*    for (var repeticiones = prompt("ingrese el número de repeticiones"); repeticiones != 0; repeticiones--){

    document.write (repeticiones +") " + "Hola UTN FRA" + "</br>")
}*/



}//FIN DE LA FUNCIÓN