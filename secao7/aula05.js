class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nome(){
        return this._nome;
    }
    //retorna valor
    set nome(nome){
        this._nome = nome;
    }
    //recebe parametro e faz atribuição
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }
    //métodos são funções mas como estão dentro da classe não são mais chamados assim, são chamados métodos e por isso não precisam tbm do nome function
    falar(msg){
        console.log(`${this.nome} esta falando ${msg}`);
    }
    comer(){
        console.log(`${this.nome} esta comendo ...`);
    }
    beber(){
        console.log(`${this.nome}${this.sobrenome} esta bebendo`);
    }
}


class Carro{
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca}${this.modelo}`);
    }

}


// encapsulamento (não deixar que um objeto seja acessado fora dela) pois no js tudo é público
//gathered e setter - serve para acessar atributos dos métodos fora da classe: colocando _(underline)