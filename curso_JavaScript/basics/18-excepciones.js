// MANEJO DE ERRORES

let myObject;

//esto dara un error

/*console.log(myObject.email);*/

// Captura de errores

//TRY - CATCH

try {
    console.log(myObject.email);
} catch {
    //Bloque de error
    console.log("se ha producido un error");
}

//Captura de error
try {
    console.log(myObject.email);
} catch (error) {
    //Bloque de error
    console.log("se ha producido un error:",error.message);
}

//Finally

try {    console.log(myObject.email);


} catch (error){
  console.log("se ha producido un error",error.message)
    

}
finally{
    console.log("este codigo se ejecuta siempre porque a lo mejor nos interesa");
}

//Lanzar errores

function suma(a,b){
    if (!Number.isNaN(a) && !Number.isNaN(b)){
        console.log("no se puede sumar estas propiedades");
    }
    return a + b;
}
 
console.log(suma("5","5"));

function esNumero(a){
    if (Number.isInteger(a)){
        console.log("es un numero")
    }
    else if (Number.isNaN(a)){console.log("es un NAN")}
    else {console.log("NO es un numero")}

}

//tipos de excepciones
try{
console.log(asdf);
}
catch (error){
     console.log("se ha producido un error", error.message)}





