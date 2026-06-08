/*console.log("Hola mundillo");
console.log("si estas leyendo esto, significa que funciona bien");

    VARIABLES

var data --> esto es una variable que no tiene asignado ningun valor y es de ambito global

let data; --> esta variable es la que se recomienda utilizar y puede ser modificada

const greeting = "hola mundo"; -->  esta variable es la que no se puede modificar

    Tipos primitivos 
let numbre = 5;
let decimal = 10.54;

    bool 
let yes = true;
let no = false; 

    string 
let text = "algun texto";
let largeText = "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!";

    valores imortantes
let null_value = null; -->  esta variable esta definida con un valor el cual esta vacio (null)
let undefined_value = undefined; --> esta variable no esta definida con un valor 

console.log(null_value);
console.log(undefined_value);
let data = 5;
console.log(data);
data = "Hey Nate";
console.log(data);

let data1 = 5 !== 5;
console.log(data1);

let data = 5 == 5 && 4 == 5;
console.log(data);

    FUNCIONES

function myFunction(){
    console.log('Impreso por la funcion')
}
myFunction();

function myFunctionWithParameters(parameter1, parameter2){
    return parameter1 * parameter2;
}
console.log(myFunctionWithParameters(5, 10));


let customer = {
    id:30,
    firstName:"Tony",
    latName:"Stark",
    age:48,
    customerOrder:function(){

    }
}

    CONDICIONALES
let i = 5;
if(i > 10)
{
    console.log('es mayor que diez');
}
else if(i == 3)
{ 
    console.log('igual que 3');
}
else
{
    console.log('es menor que diez');
};

-- Otra Opcion para estos casos --
let a = 2 + 2;
switch(a) {
case 3: 
    alert( 'muy chico' );
    break;
case 4:
    alert( 'exacto' );
    break;
case 5:
    alert( 'muy grande' );
    break;
default:
    alert( 'no se sabe cuanto vale' );
} 

    ARRAYS

1)
let myfirstarray = [];

2)
let myfirstarray = new Array();

let myFirstArray = [1, 4, 6, 8]; --> numeros
let myFirstArray = ["hola", "casa", "auto"]; --> string
let myFirstArray = [1, "hola", true, [1, 2]]; --> mixto


let mySecondArray = [1, 4, 6, 8];
console.log(mySecondArray.length);

-- BUCLES --
FOR 

let mitercerArray = [8, 5, 3, 1, 4];
for (let i = 0; i < 5; i++) {
console.log( 'El numero es ' + i);
}

WHILE

let i = 0;
while(i < 5)
{
    console.log(i);
    i++;
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i < 11);

let miprimerArray = [8, 4, 6, 3];
miprimerArray.forEach(function (elemnt, index) {
    console.log('cuando index es ' + index + ", cuyo valor es: " + element)});

let person = 
{
    firstName:"John",
    lastName:"Wick",
    Age: 31
};

for (var property in person) {
    console.log(property + ": " + person[property]);
}
*/
