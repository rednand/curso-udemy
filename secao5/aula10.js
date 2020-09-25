 //desestruturção - extrai dados de uma estrutura (arrays, objetos, etc) para variaveis

 //destructing com array
 const numeros = [1,3,5,7];
 //const [num1,num2,num3,num4] = numeros;
 //console.log(num1);
 //console.log(num2);
 //console.log(num3);
 //console.log(num4);
 //console.log(numeros);

 ///pode-se descartar valores 

 //const[n1, ,n3,n4] = numeros;
 //console.log(n1);
 //console.log(n3);
 //8console.log(n4);
 

 //pode-se colocar valor default que sera usado caso nao haja no container
//  const[nu1,nu2,nu3,nu4 = 34,nu5=99] = numeros;
//  console.log(nu1);
//  console.log(nu2);
//  console.log(nu3);
//  console.log(nu4);
//  console.log(nu5);

//destructuring com objeto
const produto = {
    nome:'playstation 4',
    preco: 1678.4
}

// const {nome,preco} = produto

// console.log(nome);
// console.log(preco);

// console.log(`${nome} custa ${preco}`);

 const {nome} = produto;
 console.log(nome);



