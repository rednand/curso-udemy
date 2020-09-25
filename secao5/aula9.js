//hoisting

//console.log(nome);// undefined - hoisting significa içamento, não ocorre erro, apenas não esta definido, e se em algum momento depois eu declarar ele fica indefinido.

//var nome = 'geek'; //declarando a variavel

//console.log(nome);

//console.log(nome);// undefined - hoisting significa içamento, com let ocorre erro e com cons tambem.

//let nome = 'geek'; //declarando a variavel

//console.log(nome);

//console.log(nome);// undefined - hoisting significa içamento, não ocorre erro, apenas não esta definido.

//const nome = 'geek'; //declarando a variavel

//console.log(nome);

console.log(idade +4); //nan - not a number  - ocorre o içamento mas não é possivel fazer essa soma
var idade = 23
console.log(idade);