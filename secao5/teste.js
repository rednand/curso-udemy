var Minhalista = [1, 3, 5, 4, 5, 6];
var MeusNumeros = [2, 4, 6, 8, 10];
var MeusFilmes = ['As horas', 'A bruxa de Blair', 'Hereditário', 'Foi apenas um sonho'];
console.log(Minhalista);
console.log(Minhalista.length);
console.log(MeusNumeros);
console.log(MeusNumeros.length);


function imprimir(n, indice) {
    console.log(`O primeiro elemento da lista é : ${indice} e ${n} é o que consta nesse índice`);
}

function multiplica(n,n) {
    return n * n;
}

Minhalista.forEach(imprimir);
MeusNumeros.forEach(imprimir);
MeusFilmes.forEach(imprimir);


console.log(Minhalista.map(multiplica));
//console.log(MeusFilmes.map(multiplica));
console.log(MeusNumeros.map(multiplica));

MeusFilmes.forEach(function (filme, indice){
    console.log(`${indice} e ${filme}`);
});


// multiplica = Minhalista.map(function (n) {
//     return n * 2;
// });

// console.log(multiplica);

//MeusFilmes.filter()


// //soma = Minhalista.forEach(function (n) {
// //     return n;
// // });

// // console.log(soma);