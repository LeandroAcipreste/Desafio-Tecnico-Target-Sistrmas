/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/


function reverseString(str) {
    
    var inversao = '';
    for (var i = str.length - 1; i >= 0; i--) {
        inversao += str[i];
    }

    return inversao
}
console.log(reverseString('testando'))
