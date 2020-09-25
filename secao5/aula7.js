//var

var numero =  42;
console.log(numero);

numero = numero+10;
console.log(numero);

//let
let outronumero = 42;
console.log(outronumero);
outronumero = outronumero + 18;
console.log(outronumero);

/*
let 
1 - é a forma mais moderna de se declarar variaveis em js, 
2  -  evita erros
3 - let tem escopo local, var é global
*/


//constantes

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

//TAXA = 5;
console.log(TAXA); // não se pode alterar constantes

//constante vs mutação

const curso ={nome: 'blablabla'}
console.log(curso.nome);
console.log(curso);

curso.nome = 'kkkkkkkk' // mutação
console.log(curso);
console.log(curso.nome);