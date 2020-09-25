//reduce  - outra estrutura de repetição tb, geralmente usada com map ou filter, sua função é reduzir valores 

var precos =[4.66,3.78,9.78,1.34,5.32];

var soma = 0;

for (i=0;i<precos.length;i++){
    soma = soma + precos[i];
}

//yconsole.log(soma);

soma = 0;

precos.forEach(function(valor){
    soma+= valor;
})

//console.log(soma);

function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);

//console.log(ret);

// exemplo map/reduce
function adicionartaxa(valor){
    return valor + 5;
}
 var ret = precos.map(adicionartaxa).reduce(somar);

 //console.log(ret);

//console.log(precos);


/*

Como reduce funciona:

[ 4.66, 3.78, 9.78, 1.34, 5.32 ]

Primeira execução: pega os dois primeiros valor (indice 0 e 1), soma e retorna este valor;
nas demais execuções: pega o retorno da execuçãio anterior e próximo valor (indice 2...)

1 = 4.66, 3.78 = 8.44
2 = 8.44 + 9.78 = 18.22
3 = 18.22 + 1.34 = 19.56
4 = 19.56 + 5.32 = 24.88
*/

//exemplo filter/map/reduce
function precomaiorque4(valor){
    return valor > 4;
}

ret = precos.filter(precomaiorque4).map(adicionartaxa).reduce(somar);
console.log(ret);

//filter pegou só os valores que 4, map adicionou taxa de 5 neles e reduce somou todos eles.