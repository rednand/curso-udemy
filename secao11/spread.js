// // rest/spread (juntar/espalhar)

// function total(...precos){
//     let total = 0;

//     precos.forEach(p => total += p);

//     return total
// }

// console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

// console.log(total(23,67));

// console.log(total(3,6,77));

// console.log(total());


let frutas = ['manga','uva','melancia'];
let frutas2 = ['abacate','morango','jaca'];

let compras = [...frutas,...frutas2];

// console.log(compras);

let alunos = ['paula','felipe','fernanda'];
let novo = 'Joana';

//alunos.push(novo);
console.log(alunos);

let todos = [...alunos,novo];

console.log(todos);