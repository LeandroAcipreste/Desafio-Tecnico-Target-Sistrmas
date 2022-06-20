/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/


 let faturamento = [{
    
    SP : 67836.43
},
{
    RJ : 36678.66
},
{
    
    MG : 29229.88
},
{
    ES : 27165.48
},
{
    Outros : 19849.53
}
]
const faturamentoArray = faturamento.map(function(obj){
    return Object.keys(obj).map(function(key){
        return obj[key]
    })
})

const arrayFloat = faturamentoArray.map(Number)

const total = arrayFloat.reduce(function(soma, i){
    return soma + i
})

console.log("O total do faturamento mensal é de: " + total)

const SP = (arrayFloat[0] / total) * 100;
const sptotal = SP.toFixed();
console.log("São Paulo corresponde a "+sptotal+"% do faturamento mensal.")

const RJ = (arrayFloat[1] / total) * 100;
const rjtotal = RJ.toFixed();
console.log("Rio de Janeiro corresponde a "+rjtotal+"% do faturamento mensal.")

const MG = (arrayFloat[2] / total) * 100;
const mgtotal = MG.toFixed();
console.log("Minas Gerais corresponde a "+mgtotal+"% do faturamento mensal.")
rjtotal 
const ES = (arrayFloat[3] / total) * 100;
const estotal = ES.toFixed();
console.log("Espírito Santo corresponde a "+estotal+"% do faturamento mensal.")

const Outros = (arrayFloat[4] / total) * 100;
const outrostotal = Outros.toFixed();
console.log("Outros Estados correspondem a "+outrostotal+"% do faturamento mensal.")
