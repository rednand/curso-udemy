function calcular_idade1(ano_nascimento){
    const data = new Date(); //gera a data atual 
    const idade = data.getFullYear() - ano_nascimento; //método que pega a data
    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date(); //gera a data atual 
    const idade = data.getFullYear() - ano_nascimento; //método que pega a data
    console.log(idade);
}

let ret  = calcular_idade1(1985);
console.log(ret); 

calcular_idade2(1985);//qndo não se tem return não se pode recuperar o valor


//console.log(calcular_idade(1991));

function somar(num1,num2){
    return num1 + num2;
}

// console.log(somar(4,6));
// console.log(somar(4));
// console.log(somar(4,6,8));
// console.log(somar(4,6,8,15));

