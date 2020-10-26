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