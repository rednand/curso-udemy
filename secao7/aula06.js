class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    //retorna valor
    set nome(nome) {
        this._nome = nome;
    }
    //recebe parametro e faz atribuição
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    // ---------------------------------métodos são funções mas como estão dentro da classe não são mais chamados assim, são chamados métodos e por isso não precisam tbm do nome function
    falar(msg) {
        console.log(`${this.nome} esta falando ${msg}`);
    }
    comer() {
        console.log(`${this.nome} esta comendo ...`);
    }
    beber() {
        console.log(`${this.nome} ${this.sobrenome} esta bebendo`);
    }
}


class Carro {
    constructor(modelo) {
        this._marca = 'Honda';
        this._modelo = modelo;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }

    imprimir() {
        console.log(`${this.marca}${this.modelo}`);
    }

}

// ----------------------------------------------------------------------------------------
// encapsulamento (não deixar que um objeto seja acessado fora dela) pois no js tudo é público
//gettered e setter - serve para acessar atributos dos métodos fora da classe: colocando _(underline)

/*OBJETOS : criação dinamica de chaves e atributos*/

//-------------------------------------------------------Instanciação de Objetos - Forma 1

// const curso = new Object();
// curso.nome = 'Programação em JS';
// curso.preco = '27.99';

// console.log(curso);

// //ou pode fazer assim

// curso['qtd_alunos'] = 999;
// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];

// console.log(curso);

//------------------------------------------------------Instanciação de Objetos - Forma 2

const programa = {
    nome: 'Photoshop',
    preco: 8399.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe',
        endereco: {
            rua: 'Da 0',
            bairro: 'Nova cu',
            cidade: 'São Paulo'
        },
        filiais: [{
                cidade: 'Rio de J'
            },
            {
                cidade: 'Recife'
            }
        ]
    }
}

//console.log(programa);

// console.log(programa.nome); //photophop
// console.log(programa.fabricante.nome);
// console.log(programa.fabricante.filiais.length);

//programa.nome = 'Playstation';
//console.log(programa.nome);
//console.log(programa);

// delete programa.fabricante.filiais;
// //console.log(programa);
// console.log(programa.fabricante.filiais);

// --------------------------------------------Instanciação de Objetos - Forma 3 - Objeto Literal


// const pessoa = {};

// console.log (typeof(pessoa));

// pessoa.nome = 'angelina';

// console.log(pessoa);

// ------------------------------------------Instanciação de Objetos - Forma 4 - Função Construtora

// function lampada(cor){
//     this.cor = cor;
// }

// const l1 = new lampada('Branca');

// console.log(l1);
// console.log(typeof(l1));


// ------------------------------------------Instanciação de Objetos - forma 5 - Objeto a partir das classes

// const p1 = new Pessoa('Felicity','Hufman');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome); // acesso ao get
// console.log(p1.sobrenome); // função gets

// p1.nome = 'Xuxa'; // utilizando setter
// console.log(p1);


// p1.falar('vem aqui baixinho');
// p1.comer(); // métodos são funções dentro da classe/objeto
// p1.beber();

const fit = new Carro('Fit');
fit.imprimir();