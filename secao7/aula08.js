//------------------------------HERANÇA

//utilizar herança é ter uma classe base e outra que vai ser uma subclasse dessa classe

/*
Funcionários
    nome, 
    sobrenome,
    email,
    cpf,
    funcao,
    registro,

clientes
    nome, --------igual de func
    sobrenome, ---igual de func
    email, -------igual de func
    cpf, ---------igual de func
    renda,
    
funcoes
    descricao,
    salario
*/

class Funcao {
    constructor(descricao, salario) {
        this._descricao = descricao;
        this._salario = salario;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(descricao) {
        this._descricao = descricao;
    }

    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
}


class Pessoas {
    constructor(nome, sobrenome, email, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }

    //métodos extras
    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }
    set nome_completo(nome_completo){
        //transforma a string em um array onde cada elemento do array sera as partes da string separadas por espaço
        nome_completo = nome_completo.split(' '); 
        // remove e retorna o primeiro elemento
        this._nome = nome_completo.shift(); 
        //junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' '); 
    }
    imprimirdados(){
        console.log(`${this._nome} ${this._sobrenome}`);
    }
}

class Funcionario extends Pessoas { // ----------------- classe Funcionario herda Pessoa(primeiro, estamos dizendo que funcionario é uma Pessoa)
    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro; // ---------- não estamos declarando todos os atributos de pessoa de novo pois o super'classe' já faz esse papel de levar esses atributos para funcionario.
    }
    get funcao() {
        return this._funcao;
    }
    set funcao(funcao) {
        this._funcao = this.funcao;
    }
    get registro() {
        return this._registro;
    }
    set registro(registro) {
        this._registro = registro;
    }
}

class Clientes extends Pessoas{
    constructor(nome,sobrenome,email,cpf,renda){
        super(nome,sobrenome,email,cpf);
        this._renda = renda;
    }
    get renda(){
        return this._renda;
    }
    set renda(renda){
        this._renda = renda;
    }
}

// const c1 = new Clientes('Felicity','Hufman',"@hotmail",'366811556',4000);
// const c2 = new Clientes('Renato','Jones',',@mskvfbfb','1351353',5600);
// console.log(c1.nome_completo);
// console.log(c2.nome_completo);
// c1.nome_completo = 'Xuxa Meneguel';
// console.log(c1);
// c2.imprimirdados();


const programador = new Funcao('Programador',4839.54);
const suporte = new Funcao('Suporte', 2849);

console.log(programador);
console.log(suporte);

const f1 = new Funcionario('Pedro','Silva','@aklkvmla','36545615645',programador,'ffa65');
const f2 = new Funcionario('Marco','Silva','@mlkmlkf','3651564566',suporte,'afal6');
console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);

f1.imprimirdados();