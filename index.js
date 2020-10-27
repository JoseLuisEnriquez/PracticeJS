// Variables y operadores

/*
1.a)
Crear dos variables numéricas y utilizar el operador suma para guardar
el valor de la suma de ambos números en una 3er variable.
*/

var num1, num2, res;
num1 = 10;
num2 = 15;
res = num1 + num2;
console.log('The sum of 2 numbers resulted in:', res);

/*
1.b)
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/

var word1, word2, unionWords;
word1 = 'Good';
word2 = 'Morning';
unionWords = word1 + word2;
console.log('Joining two words forms:', unionWords);

/*
1.c)
Crear dos variables de tipo String y sumar el largo de cada variable
(cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/

var lettWord1, lettWord2, cantChar;
lettWord1 = 'I dont know';
lettWord2 = 'My name is Jose';
cantChar = lettWord1 + lettWord2;
console.log('The phrase has:', cantChar.length, 'characters');

// Strings

/*
2.a)
Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

var bigWord;
bigWord = 'this is a sample text';
console.log('The original text is:', bigWord, '. And now it looks like this:', bigWord.toUpperCase());

/*
2.b)
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var aText, newText;
aText = 'Crocodile is an animal';
newText = aText.substring(0,5);
console.log('The first five characters are:', newText);


/*
2.c)
Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

var bText, cantLetters, lastLetters;
bText = 'I dont like soup';
cantLetters = bText.length - 4;
lastLetters = bText.substring(cantLetters);
console.log('The last four characters are:', lastLetters);

/*
2.d)
Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var myPhrase, oneLetter, leftoverLetter, newPhrase;
myPhrase = 'anewphraseforatest';
oneLetter = myPhrase.substring(0,1);
leftoverLetter = myPhrase.substring(1);
newPhrase = oneLetter.toUpperCase() + leftoverLetter;
console.log('The phrase with a first letter diferent:', newPhrase);

/*
2.e)
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var mySecondPhrase, numberIndex;
mySecondPhrase = 'Newspapper is old';
numberIndex = mySecondPhrase.indexOf(' ');
console.log('The first blank is at position:', numberIndex);

/*
2.f)
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string
que tenga la primera letra de ambas palabras en mayúscula y
las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

var aBigPhrase, letter1, remains, nmbrIndex, oneSpace, others;
aBigPhrase = 'locomotive accommodation';
letter1 = aBigPhrase.substring(0,1);
remains = aBigPhrase.substring(1);
aBigPhrase = letter1.toUpperCase() + remains;
nmbrIndex = aBigPhrase.indexOf(' ');
letter1 = aBigPhrase.substring(0,nmbrIndex);
remains = aBigPhrase.substring(nmbrIndex);
oneSpace = remains.substring(0,2);
others = remains.substring(2);
aBigPhrase = letter1 + oneSpace.toUpperCase() + others;
console.log('The first letters are changed:', aBigPhrase);

//Arrays

/*
3.a)
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log)
*/

var month = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
console.log('Months 5 and 11 are:', month[4], month[10]);

/*
3.b)
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

var orderMonthName;
orderMonthName = month.sort();
console.log('Months sorted by name:', orderMonthName);

/*
3.c)
Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

var newElements;
newElements = month;
newElements.unshift('Sun');
newElements.push('Moon');
console.log('Sun and Moon elements are added:', newElements);

/*
3.d)
Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

var quitElements;
quitElements = newElements;
quitElements.shift('Sun');
quitElements.pop('Moon');
console.log('The Sun and Moon elements have been removed', quitElements);

/*
3.e)
Invertir el orden del array (utilizar reverse).
*/

var monthReverse;
monthReverse = month;
monthReverse.reverse();
console.log('Months ordered from highest to lowest', monthReverse);

/*
3.f)
Unir todos los elementos del array en un único string
donde cada mes este separado por un guión - (utilizar join).
*/

var monthsTogether;
monthsTogether = month.join('-');
console.log('Months in a single text string:',monthsTogether);

/*
3.g)
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

var month2 = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"], copyMonth;
copyMonth = month2.slice(4,11);
console.log('May to November', copyMonth);

//If-Else

/*
4.a)
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y
sino un alerta con el mensaje “Lower than 0,5”
*/

var nr = Math.random();
if (nr >= 0.5){
    alert('Greater than 0,5');
} else
    alert('Lower than 0,5');
console.log(nr);

/*
4.b)
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

var Age;
Age = 85;
if(Age < 2){
    alert('Baby');
}
else if (Age >= 2 && Age <= 12){
    alert('child');
}
else if (Age > 12 && Age <= 19){
    alert('adolescent');
}
else if (Age > 19 && Age <= 30){
    alert('young');
}
else if (Age > 30 && Age <= 60){
    alert('adult');
}
else if (Age > 60 && Age <= 75){
    alert('elderly');
}
else {
    alert('Old man');
}

//For

/*
5.a)
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
para mostrar una alerta utilizando cada una de las palabras.
*/

var list = ['one', 'two', 'three', 'four', 'five'];
for (var i = 0; i < 5; i++){
    alert(list[i]);
}

/*
5.b)
Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.
*/

var fLetter, rem;
for (var i = 0; i < 5; i++){
    fLetter = list[i].substring(0,1);
    rem = list[i].substring(1);
    list[i] = fLetter.toUpperCase() + rem;
    alert (list[i]);
}

/*
5.c)
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa.
*/

var sentence;
sentence = list[0];
for (var i = 1; i < 5; i++){
    sentence = sentence + list[i];
}
alert(sentence);

/*
5.d)
Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array,
desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

var listNumber = [];
for (var i = 0; i < 10; i++){
    listNumber[i] = i;
}
console.log(listNumber);

// Functions

/*
6.a)
Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.
*/

function suma(n1, n2){
    return n1 + n2;
}
var n1, n2;
n1 = 10;
n2 = 12;
var rs = suma(n1, n2);
console.log('Result of the suma function: ', rs);

/*
6.b)
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function newSum(n3, n4){
    if (isNaN(n3)){
        return alert('The first value is not a number');
    }
    else if (isNaN(n4)){
        return alert('The second value is not a number');
    }
    else{
        return n3 + n4;
    }
}
var n3, n4;
n3 = 'Hello';
n4 = 15;
var res = newSum(n3, n4);
console.log('Result of the newSum function:', res);

/*
6.c)
Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.
*/

function validateInteger(x){
    if (Number.isInteger(x)){
        return('The number is integer');
    } else return ('The number is not integer');
}
var x;
x = 2;
console.log(validateInteger(x));