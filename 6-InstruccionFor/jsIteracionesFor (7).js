function mostrar()
{

    var numero = parseInt(prompt("Ingrese un numero"));
    var contador = 0;
    
    while(isNaN(numero)) {
    
        numero = parseInt(prompt("Eso no es un numero. Reingrese un numero de repeticiones"));
    }
    
    for( i = 1 ; i <= numero ; i++ ){
    
        if ( numero % i == 0 ) {
    
            document.write(i + "</br>")
            contador++;
    
        }
    
    }
    
    document.write("Contador de numeros divisores: " + contador + "</br>")


}//FIN DE LA FUNCIÓN