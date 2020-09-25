//forma 1 

function somar1(num1,num2){
    return num1 + num2;
}

console.log(somar1(4,6));

//forma 2 
let somar2 = function(num1,num2){
    return num2 + num1;
}

console.log(somar2(4,6));

//forma 3
let somar3 = somar1;
;
console.log(somar3(4,6));

//arrow function

// (param1, param2, …, paramN) => { statements }
// (param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
// (singleParam) => { statements }
// singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
// () => { statements }

let somar4 = (num1,num2) => {
    return num1 + num2;
}
 console.log(somar4(4,6));

 //Caso a função tenha apenas 1 parametro de entrada e executa apenas uma linha, pode simplificar 
 // usando arrow function

let dobrar = valor => valor *2;

console.log(dobrar(6));

//essa ultima se usa qndo se tem apenas uma linha de execução

//forma tradicional

function mensagem(){
    console.log('vai tomar no cu');
}

mensagem();
//forma arrow function

const msg = () => console.log('Vai tomar no cu');

msg();

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
  