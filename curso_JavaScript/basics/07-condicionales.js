//condicionales: programacion no estructurada
//estructuras de control
// se pueden agrupar en 3 bloques

// 1. if, else

let age = 37;
if (age == 37){
    //condicion
    console.log("Age vale 37");
}
else if (age < 18) {
    console.log("es menor de edad");

}

else{
    console.log("Age no vale 37");
}

// 2. operador ternario: forma rapida de escribir un condicional simple

const mensaje = age == 37 ? "la edad es 37" : "la edad no es 37";

console.log(mensaje);

// 3. switch: 

let day = 8;
let dayname;

        //variable que inspecciono
switch (day){
    case 0:
        dayname = "lunes";
        break;
    case 1:
        dayname = "martes";
        break;
    case 2:
        dayname = "miercoles";
        break;
    case 3:
        dayname = "jueves";
        break;
    case 4:
        dayname = "viernes";
        break;
    case 5:
        dayname = "sabado";
        break;
    case 6:
        dayname = "domingo";
        break;
    
    default:
        console.log("numero de dia incorrecto");

}

console.log(dayname);