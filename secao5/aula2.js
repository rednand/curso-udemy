/*
arrays são estruturas de dados que permitem guardar vários dados
objetos indexados com numero n-1

índices em um array
[0][1][2][3][4]  - array tamanho 5 - esses são os índices que representam a posição do elemento no array
valores
[12][24][true]['geek'][52] - nu índice 1 eu tenho o valor 12, no índice 2 eu tenho o valor 24, etc

//
-possuem valores infinitos
-pode-se colocar qualqur tipo de dado
*/

//forma 1
var alunos = new Array ('cristina', 'rICARDO','lucas','maria','sofia');
//console.log(alunos);

//forma 2 (a RECOMENDADA) - mais simples, é só abrir os colchetes
var notas = [1,3,5,7,9];
//console.log(notas);

//criando um array vazio
var dados = [];
//console.log(dados);

//fazendo acesso ao valor de um índice
//console.log(notas[2]);

//alterando um valor a partir do índice
notas[2]=12;
//console.log(notas);

//atenção ao acessar um valor com um índice que não existe
/*
notas[9]=10; //não existe,
console.log(notas);
console.log(notas[5]); //undefined
console.log(notas[6]); //undefined
console.log(notas[7]); //undefined
console.log(notas[8]); //undefined
console.log(notas[9]);
*/

if (notas[5] == undefined){
    notas[5] = 54;
}

//console.log(notas[5] == undefined);
//inserindo elemento no final do array
var nomes = ['paula','maria','julia'];
//console.log(nomes);
nomes.push('vanessa'); //insere o nome no final do array
//console.log(nomes);


//tamanho do array
//console.log(nomes.length); //4
var tam = nomes.length;

//console.log(tam); //4


//ordenar os dados de um array
var alunos = ['Vera','Lucia','Pedro','Fernanda', 'Mário', 'Ana', 'Carla'];
//console.log(alunos);

alunos.sort(); //orderando array de strings
//console.log(alunos);

var preços = [123.55,42.27,546.99,23.12];
//console.log(preços);
//preços.sort(); //ordenação de floats não funciona assim
//console.log(preços);

preços.sort(function(a,b){return a - b;}); //função languida - callback
//console.log(preços);

var idades = [5,1,8,12,44,78];
//console.log(idades);

//idades.sort(); //ordenação de ints tb nao funciona assim
//console.log(idades);

idades.sort(function(a,b){return a-b});
//console.log(idades);

//deletando dados de um array
delete idades[3];
//console.log(idades);
idades[3] = 12;
//console.log(idades);

//idades.splice(3,1); //a partir do indice 3, deleta 1 elemento
//console.log(idades);

//idades.splice(3,0,56,89); //a partir do elemento 3, nao delete mas adcione os elementos dados
//console.log(idades);

//idades.splice(3,1,23);
//console.log(idades);

//iterar em um array
for (var i = 0;i<idades.length;i++){
    //console.log(idades[i]);
}

//console.log(idades);

//removendo elementos da ultima posição do array
//idades.pop(); //remove e retorna o ultimo elemento
//console.log(idades);

//var ret = idades.pop();
//console.log(ret);
//console.log(idades);

//removendo o primeiro elemento de um array
//idades.shift(); //remove e retorna o primeiro elemento de um array
//console.log(idades);

//var ret = idades.shift();
//console.log(ret);
//console.log(idades);

//inseerindo elementos no inicio de um array
//idades.unshift(99);
//console.log(idades);

//retorna um novo array a partir do indice informado
//var novo = idades.splice(3);
//console.log(novo);

//var novo = idades.slice(1,4); //a partir do indice 1, pegue ate o indice 4 sem inclui-lo
//console.log(novo);

var pares = [2,4,6,8,10];
var impares = [1,3,5,7,9];

var rest = pares.concat(impares); //concatena os dois arrays
//console.log(rest);

rest = impares.concat(pares);
//console.log(rest);

rest.sort(function(a,b){return a-b});
//console.log(rest);

//matrizes 4x4
var tabuleiro =[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(tabuleiro);

//mesma coisa que:
/*
    [
        [ 1,  2,  3,  4], // linha 0
        [ 5,  6,  7,  8], // linha 1
        [ 9, 10, 11, 12], // linha 2
        [13, 14, 15, 16]  // linha 3
    ]
*/


console.log(tabuleiro[0][0]);//linha 0 e coluna 0
console.log(tabuleiro[2][2]); // linha 2 e coluna 2