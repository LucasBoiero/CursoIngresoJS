function mostrar()
{
//tomo la edad  


var edad;

    edad = parseInt(document.getElementById("edad").value);

// esta dentro del rango
    /*if (edad >= 13 && edad <=17){

        alert ("Es Adolescente");
        
        
    }*/

    //si la edad no esta fuera del rango

    if(!(edad < 13 || edad > 17)) {

        alert ("Es Adolescente");

    }




}//FIN DE LA FUNCIÓN