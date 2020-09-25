//Template strings

const idade = 19;
const nome = 'Geek';

function incrementa(idade){
    return idade + 3;
}
console.log(nome + ' tem ' + idade + ' anos.');

//templates string foram criados para facilitar esse tipo de escrita , usando + etc

console.log(`${nome} tem ${incrementa(idade)} anos`);
/* em template strings usa-se crase e nao aspas simples ou acento agudo */