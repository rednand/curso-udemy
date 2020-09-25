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


}


// encapsulamento (não deixar que um objeto seja acessado fora dela) pois no js tudo é público
//gathered e setter - serve para acessar atributos dos métodos fora da classe: colocando _(underline)