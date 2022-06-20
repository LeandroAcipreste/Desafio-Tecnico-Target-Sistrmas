/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

let valores = []

fetch("/dados.json")
.then((resp)=> resp.json())
.then(function(data){
   const dados = data;
   dados.forEach(element => {
      valores.push({
        valor: element.valor
      })      
   });
}).then(()=> {
   const valoresArray = valores.map(function(obj){
      return Object.keys(obj).map(function(key){
         return obj[key];
      });
   });
   let valoresFloat = valoresArray.map(Number)
   
   const menor =  Math.min(...valoresFloat);
   const maior =  Math.max(...valoresFloat);

   
   console.log('O menor faturamento ocorrido em um dia do mês é: ' + menor);
   console.log('O maior faturamento ocorrido em um dia do mês é: ' + maior);

      const soma = valoresFloat.reduce(function(soma, i){
         return soma + i;
      });
   console.log(soma)
  
   const media = soma / 21
   console.log (media)

   const valorDiarioSuperiorAMedia = 0
   for (let i = 0; i < valoresFloat.length; i++){
      if( valoresFloat > media){
         valorDiarioSuperiorAMedia++
      }
   }
   console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é: ' + valorDiarioSuperiorAMedia)
})





