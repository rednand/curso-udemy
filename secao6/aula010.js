// let xuxa = 'global'; //pode ser acessada globalmente

// function imprimir(){
//     console.log(xuxa);
// }

// function outra(){
//     let xuxa = 'local'; // pode ser acessada localmente
//     imprimir();
//     console.log(xuxa); // 
// }

// outra(); // imprime global , devido ao contexto lexico
// // e depois imprime a local, a global tem precedencia
 let variavel = 'global';

 function externa(){
     let variavel = 'local';

     function interna(){
         return variavel; //local
     }

     return interna;
 }

 let executa = externa();

 console.log(executa()); //local


 /*
 Estamos estudando Closures(contexto léxico de uma função)
 Existe uma linguagem de Programação chamada Clojure - não confundir
 */