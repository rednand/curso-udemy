//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. Ela permite percorrer um vetor e obter um novo array cujos itens são o resultado de uma função de callback que recebe como parâmetro cada item original. Por exemplo, podemos partir de um array de valores numéricos e obter um novo contendo o quadrado de cada item original.
//Aqui é importante destacar que o método map() não modifica o array original, ele retorna um novo array com os itens resultantes do mapeamento.

//a seguir mapeamos um array de objetos e retornamos apenas uma propriedade de cada item:

var vencedores = [
   {
       nome : "Equipe Super",
       pais : "Brasil"
   },
   {
       nome : "Time Maximo",
       pais : "EUA"
   },
   {
       nome : "Mega Grupo",
       pais : "Canadá"
   }
];

var podioPorPais = vencedores.map(function(item, indice){
   return item.pais;
});

console.log(podioPorPais);




var valores=[2,4,6,8,10];
console.log(valores);

function dobrar(valor){
    return valor*2;
}

dobro = valores.map(dobrar);
console.log(dobro);


var dobro = valores.map(function(valores){
    return valores*2;
});

console.log(dobro);

//encadeando maps para realizar multiplas transformações


function soma4(valor){
    return valor+4;
}

function dividepor5(valor) {
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma4).map(dividepor5);
//console.log(resultado);

