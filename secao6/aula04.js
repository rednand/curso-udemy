function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;

}

// console.log(somar());
// console.log(somar(2));
// console.log(somar(2, 5));
// console.log(somar(5, 3, 9));
// console.log(somar(2, 4, 6, 8, 12));

// mesmo que não se passe nada pra função o js cria um array chamado arguments que são os argumentos da função
// Os argumentos de uma função são mantidos em um objeto do tipo array. Dentro de uma função, você pode endereçar os argumentos passados para ele conforme: arguments[i]
// onde i é um número ordinal do argumento, começando com zero. Então, o primeiro argumento passado para a função seria arguments[0]. O número total de argumentos é indicado por arguments.length.
// Usando o objeto arguments, você pode chamar a função com mais argumentos do que o formalmente declarado. Isso muitas vezes é útil se você não sabe de antemão quantos argumentos serão passados para a função. Você pode usar arguments.length para determinar a quantidade de argumentos passados para a função, e então acessar cada argumento usando o objeto arguments.
// Nota: A variável arguments é "como um array", mas não é um array. Ela é como um array pois possui um índice numerado e a propriedade length. No entanto, não possui todos os métodos de manipulação de array.


function myConcat(separador) {
     var result = "", // inicializa a lista
         i;
     // itera por meio de argumentos
     for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separador;
     }
     return result;
}

//console.log(myConcat(", ", "red", "orange", "blue"));


function imprimirvalores(num1,num2){
    for (let i in arguments){
        console.log(arguments[i]);
    }

}

// imprimirvalores();
// imprimirvalores(4,6);
// imprimirvalores(4,6,8);
// imprimirvalores(3,6,12,44,56)


//Gambiarras 1

function somar2(num1,num2,num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    return num1 + num2 + num3;
}
 
// console.log(somar2(4,5,6)); //15
// console.log(somar2()); //6
// console.log(somar2(2)); //7
// console.log(somar2(2,2)); //7
// console.log(somar2(2,2,2,2)); //6

// console.log(somar2(0,0,0)); //era para ser zero mas ele retorna 6 pois na linguagem js o valor 0 é considerado falso

function somar3(num1,num2,num3){
    num1 = isNaN(num1)? 1:num1;
    num2 = isNaN(num2)? 1:num2;
    num3 = isNaN(num3)? 1:num3;

    return num1 + num2 + num3;
}

// console.log(somar3(4,5,6)); //15
// console.log(somar3()); //6
// console.log(somar3(2)); //7
// console.log(somar3(2,2)); //7
// console.log(somar3(2,2,2,2)); //6

// console.log(somar3(0,0,0)); //resolve o problema do 6 da anterior
//isNaN()
//A função isNaN() determina se um valor é NaN ou não. Nota: coerção dentro da função isNaN tem regras interessantes; você pode, alternativamente, querer usar Number.isNaN(), como definido no ECMAScript 6,  ou você pode usar typeof para determinar se o valor não é um número.

//forma atual - recomendada

function somar4(num1=1,num2=2,num3=3){
    return num1+num2+num3;
}


// console.log(somar4(4,5,6)); //15
// console.log(somar4()); //6
// console.log(somar4(2)); //7
// console.log(somar4(2,2)); //7
// console.log(somar4(2,2,2,2)); //6
// console.log(somar4(0,0,0)); // 0
// console.log(somar4('a','b','c')); //abc
// console.log(somar4(true,false,'c')); //1c considera true como 1 e false como 0
// console.log(somar4(2,true,false)); //3

/*
Em javascript true é 1 e false é 0 
*/

function somar5(num1=1,num2=2,num3=3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return "Não foi possível realizar a soma";
    }

}


console.log(somar5(4,5,6)); //15
console.log(somar5()); //6
console.log(somar5(2)); //7
console.log(somar5(2,2)); //7
console.log(somar5(2,2,2,2)); //6
console.log(somar5(0,0,0)); // 0
console.log(somar5('a','b','c')); //abc
console.log(somar5(true,false,'c')); //1c considera true como 1 e false como 0
console.log(somar5(2,true,false)); //3
