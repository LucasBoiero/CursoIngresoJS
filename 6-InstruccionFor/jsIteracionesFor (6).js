function mostrar()
{

var numero = parseInt(prompt("Ingrese un numero"));
var contador = 0;

while(isNaN(numero)) {

    numero = parseInt(prompt("Eso no es un numero. Reingrese un numero de repeticiones"));
}

for( i = 1 ; i <= numero ; i++ ){

    if ( i % 2 == 0 ) {

        document.write(i + "</br>")
        contador++;

    }

}

document.write("Contador de numeros pares: " + contador + "</br>")


/*Enunciado:
al presionar el botón pedir un número.
 mostrar los numeros pares desde el 1 al número ingresado, 
 y mostrar la cantidad de numeros pares encontrados.*/


}//FIN DE LA FUNCIÓN