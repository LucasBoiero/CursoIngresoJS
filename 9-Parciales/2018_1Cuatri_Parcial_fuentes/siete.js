function mostrar()
{

    var nota;
    var sexo;
    var notaMenor;
    var sexoMenor;
    var contadorVaronesMas6 = 0;
    var acumuladoresNotas = 0;
    var promedio;
    var flag = 0;

    for (var i = 0; i < 5; i++){

        nota = parseInt(prompt("Ingrese su nota (0-10): "));
        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota = parseInt(prompt("Nota invalida. Ingrese su nota (0-10): "));
        }
        //aca valido la nota

        sexo = prompt("Ingrese Sexo (f-m): ");
        while (sexo != "f" && sexo != "m"){
            sexo = prompt("Sexo Invalido.Ingrese Sexo (f-m): ");
        }
        //aca valido el sexo

            acumuladoresNotas = acumuladoresNotas + nota;

          if (nota < notaMenor || flag == 0){
            notaMenor = nota;
            sexoMenor = sexo;
            flag = 1;
          }  
        
          if (sexo == "m"&& nota >= 6){
              contadorVaronesMas6++;
          }

         
    }
    
    promedio = acumuladoresNotas / 5;

    alert("El promedio de las notas es de: " + promedio + "\nLa nota mas baja es: " + notaMenor + 
    "\nSexo menor: " + sexoMenor + "\nCantidad de varones con nota mayor a 6: " + contadorVaronesMas6);



}
/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/