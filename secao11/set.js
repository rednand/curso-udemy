/*

- conjuntos não aceitam repetição de valores
- conjuntos não são indexados

*/

//declarando um conjunto
let cursos = new Set();

//adicionando valores 
cursos.add('programação para leigos');
cursos.add('algoritmo');

//adicionar valores concatenados
cursos.add('programacoa em c').add('java').add('python');

cursos.add('banco de dados');
cursos.add('Djando framework');
console.log(cursos);

//acessando tamanho do conjunto
console.log(cursos.size);

console.log(cursos.has('banco de dados'));

//deletar elementos de um conjunto
cursos.delete('algoritmo');
console.log(cursos);