function mostrar()
{
//tomo la edad  

var edad;

    edad = parseInt(document.getElementById("edad").value);
//Saco la negacion para que solo marque lo que esta fuera del rango
    if(edad < 13 || edad > 17) {

        alert ("No es Adolescente");

    }
}//FIN DE LA FUNCIÓN