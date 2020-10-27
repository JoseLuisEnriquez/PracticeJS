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