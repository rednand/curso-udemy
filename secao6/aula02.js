//função é igual a ação
//De modo geral, função é um "subprograma" que pode ser chamado por código externo (ou interno no caso de recursão) à função. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.
// funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto.

//Cidadãos de primeira classe pois pode usa-la como variavel ou parâmetros, dando mais dinamica e flexibilidade ao programa

function somar(num1,num2){
    return num1 + num2;
}

//console.log(somar(6,4));

//Exemplo 1 
const executar = somar;
//console.log(executar(8,2));

//Exemplo 2 

function subtrair(num1,num2){
    return num1 - num2;
}

function faz_algo(num1,num2, qualquercoisa) {
    return qualquercoisa(num1,num2);
}

console.log(faz_algo(5,5,somar));
console.log(faz_algo(8,3,subtrair));

function outra(z){
    return z;
}

const ret = outra(somar);
console.log(ret(8,2));

let retorna = outra(faz_algo);
console.log(retorna(8,2,somar));

//a função mais simples é a que pode ou não retornar valores

function mensagem(){
    console.log('evolua seu lado geek');//como não tem o return, ela retorna undefined
}

mensagem();

console.log(mensagem());

//Para retornar um valor diferente do padrão, uma função deve ter uma instrução return que específica o valor a ser retornado. Uma função sem um return retornará um valor padrão. No caso de um método construtor chamado com a palavra reservada new, o valor padrão é o valor do parâmetro this. Para todas as outras funções, o valor padrão de retorno é undefined.

let valores = [1,3.4,true,somar];

for(let i = 0; i<valores.length;i++){
    console.log(typeof(valores[i]));
}


/*As instruções que formam o corpo da função.
Há um sintaxe especial para declarar funções (veja Instrução function para detalhes):
function nome([param[, param[, ... param]]]) {
   instruções
}
*/

