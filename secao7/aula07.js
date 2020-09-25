const curso = {
    nome: 'Programaçao em js',
    horas: 25,
    preco: 27.99
}

// console.log(curso);

//console.log(Object.keys(curso)); ------------------- array somente com as chaves: nome, horas, preco
// console.log(Object.values(curso)); ----------------- apenas os valoes das chaves do array curso
// console.log(Object.entries(curso));  ----------------- array do array com chave e valor
// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// });

// Object.entries(curso).forEach(([chave,valor])=>{
//     console.log(`${chave}: ${valor}`);
// });

// curso.nome = 'blblbalba';

// console.log(curso);

// Object.defineProperties(curso,'publicação',{
//     enumerable: true,
//     writable: false, //não pode ser alterado
//     value: '07/12/2019'
// });

// console.log(curso);

// Object.freeze(curso); ---------------não permite alteração

// curso.nome = 'dança'

// console.log(curso);

const usuarios = [
    {nome: 'alimne moraes', empresa:'geek'},
    {nome:'renan',empresa:'google'}
]

// console.log(usuarios);

console.table(usuarios); //---------------- mostra uma tabela com array com objeto dentro

console.table(curso); // -------------------- mostra uma tabela com array