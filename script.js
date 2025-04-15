//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida/o al bootcamp Femcoders de Factoría F5')

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let varString = "Hello world";
let varNumber = 13;
let varBoolean = true;
let varNull = null;
let varUndefined;
let varObject = {
    commonName: "Ipe",
    scientificName: "Handroanthus albus",
    distribution: "Tropical",
};
let varArrayPlants = ["Boston fern", "Golden pothos", "Plumed cockscomb"];

console.log(varString);
console.log(varNumber);
console.log(varBoolean);
console.log(varNull);
console.log(varUndefined);
console.log(varObject);
console.log(varArrayPlants);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ["helado", "tarta", "pastel"];
console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    nombre: "Thais",
    edad: 31,
};
console.log(coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(typeof varString);
console.log(typeof varNumber);
console.log(typeof varBoolean);
console.log(typeof varNull);
console.log(typeof varUndefined);
console.log(typeof varObject);
console.log(typeof varArrayPlants);
console.log(typeof postres);
console.log(typeof coder);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let varSum = 5 + 9;
console.log(varSum);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let varSubtraction = 20 - 3;
console.log(varSubtraction);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let varMultiply = 5 * 4;
console.log(varMultiply);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let varDivide = 30 / 6;
console.log(varDivide);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let varFirst = 1;
let varSecond = 2;
let varComparison = varFirst == varSecond;
console.log(varComparison);

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let varComparisonTrue = varFirst != varSecond;
console.log(varComparisonTrue);

//Ejercicio 11: completa el ejercicio
//Realiza la operación de comparación que consideres para que el resultado en consola sea true

let num1 = 15
let num2 = 20

let comparacion = num1 < num2;
console.log(comparacion);

//Ejercicio 12: completa el ejercicio
//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad

let num3 = 1
let num3AsString = "1"

let result = num3AsString > num3;
console.log(result);

//Ejercicio 13: completa el ejercicio
//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.

let result2 = num3 == num3AsString;
console.log(result2);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let varName = "Thais";
let varLastName = "Rocha de Queiroz";
console.log(varName + " " + varLastName);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
let res =  a < 10 && b > 1;
console.log(res);

//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
let res2 = a < 10 && b < 1;
console.log(res2);

//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
let res3 = a == 5 || b == 5;
console.log(res3);

//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
let res4 = a == 6 || b == 0;
console.log(res4);

//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
let res5 = a == 0 || b == 3;
console.log(res5);

//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
let res6 = a == 6 && b == 3;
console.log(res6);