
/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

const number = 50

function generateFibonacci (){
    const fibo =[]
    fibo [0] = 0;
    fibo [1] = 1;
    for (var i = 2; i < number ; i++ ){
        fibo[i] = fibo [ i - 2] + fibo [ i - 1]
    }
    return fibo
};

const f = generateFibonacci (number)

console.log (f)

if (f.includes(number)){
    console.log("O número " + number + " pertence a sequência de Fibonacci")
} else {
    console.log("O número " + number + " não pertence a sequência de Fibonacci")
}


