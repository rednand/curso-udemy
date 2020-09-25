//Enquanto o map tem como retorno um novo array, o forEach não retorna nada. Ou seja, ele serve apenas para percorrer o vetor original e nos permite executar algum procedimento com cada item.



var curso =['Programação para leigos', 'algoritmos e lógica de programação','programação em c','prog em java','prog em Python','banco de dados'];
console.log(curso);
console.log(curso.length);

//definir uma função
function imprimir(curso, indice,array){
    console.log(indice + '-' + curso);
    console.log(array);
}

//curso.forEach(imprimir)

//utilização de uma função anonima (lambda/callback) e template string
curso.forEach(function(curso,indice){
    console.log(`${indice}- ${curso}`);
});

for(var i=0;i<curso.length; i++){
    console.log(i+'-'+curso[i]);
}