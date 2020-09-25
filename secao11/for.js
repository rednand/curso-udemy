//let nome = 'Geek University';

// for (let letra of nome){
//     console.log(letra);
// }

// let numeros = [1,2,3,4,5];

// // for(let numero of numeros){
// //     console.log(numero * 2);
// // }

// //caso queira ter acesso a indices

// for (let indice in numeros){
//     console.log(`Indice: ${indice}, Valor: ${numeros[indice]}`);
// }

let cursos = new Map([
    [1,'pROGRAMAÇÃO '],
    [2,'pROGRAMAÇÃO LEIGOS '],
    [3,'pROGRAMAÇÃO JAVA'],
    [4,'pROGRAMAÇÃO PYTHON'],
    [5,'pROGRAMAÇÃO BANCO'],
    [6,'pROGRAMAÇÃO JS'],
    [7,'pROGRAMAÇÃO WEB']
]);

for(let curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`);
}

//somente o valor
for(let valor of cursos.values()){
    console.log(valor);
}

//chave e valor

for(let [chave,valor] of cursos.entries()){
    console.log(`${chave} - ${valor}`);
}


let conjunto = new Set([1,2,3,4,5,6]);

for(let numero of conjunto){
    console.log(numero);
}