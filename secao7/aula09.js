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
    get nome_completo() {
        return this._nome + ' ' + this._sobrenome;
    }
    set nome_completo(nome_completo) {
        //transforma a string em um array onde cada elemento do array sera as partes da string separadas por espaço
        nome_completo = nome_completo.split(' ');
        // remove e retorna o primeiro elemento
        this._nome = nome_completo.shift();
        //junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' ');
    }
    imprimirdados() {
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

    //sobrescrita de método
    imprimirdados() {
        super.imprimirdados(); //atraves da super eu consigo usar os dados da super classe
        console.log(`Registro: ${this.registro} \nSalário:${this.funcao.salario}`); // pode-se criar nas clases filhas com o msmo nome que se tem na classe pai só que fazendo outra coisa
    }
}



class Clientes extends Pessoas {
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    get renda() {
        return this._renda;
    }
    set renda(renda) {
        this._renda = renda;
    }
}

const prog = new Funcao('programador', 3654.44);
const f1 = new Funcionario('jAO', 'CARLOS', '@mvaovmaio', 36545615645, prog, 'registro');
const c1 = new Clientes('cladia','josefa','@FMKDV',3651155654,4566.45);
f1.imprimirdados(); // pessoa / nessa pessoa o método funciona de uma forma
c1.imprimirdados(); // pessoa / nessa pessoa o método funciona de outra forma -----   cliente não sobreescreveu

/* sobrescrita de método - overwriting*/

// ------------------- POLIMORFISMO: dois objetos do mesmo tipo tendo comportamentos diferentes


