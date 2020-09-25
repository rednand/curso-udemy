const cursos = [
    'Programção para leigos',
    'algoritmos e logica',
    'Programção em C',
    'Programção em Java',
    'Programção em Python',
    'Programção web com jango',
    'Programacao em JS',
    'Banco de Dados',
]
function apresentar(cursos, indice){
  //  console.log(`${indice +1}-${cursos}`);//template string
}

//usando foreach
//cursos.forEach(apresentar); //aqui esta ocorrendo callback

//usando lambda
cursos.forEach(function(curso,indice){
 //   console.log(`${indice +1}-${cursos}`);//template string
});

//usando arrow
//cursos.forEach((cursos,indice) => console.log(`${indice +1}-${cursos}`));

const precos = [23.55,78.23,899.43,12.89,5.23,67.45];
console.log(precos);

let menores =[]

// //for(let p in precos){
//     if (precos[p]< 50){
//         menores.push(precos[p]);
//     }
// }

// for(let i=0;i<precos.length;i++){
//     if(precos[i]< 50){
//         menores.push(precos[i]);
//     }
// }

//console.log(menores);

//forma 1

// menores = precos.filter(function(precos){
//     return precos < 50;
// });

//forma 2 
menores = precos.filter(precos => precos < 50);
console.log(menores);