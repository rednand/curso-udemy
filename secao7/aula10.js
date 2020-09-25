class Carro {
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
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
    imprimirdadod(){
        console.log(`${this.marca} ${this.modelo}`);
    }

    static retornar_marca(){
        return 'honda';
    }
}

// const fit = new Carro('fit'); // ------------- isso é instanciar objetos . é justo precisar instanciar um objeto quqlr pra poder fazer acesso À marca(duvida)
//fit.imprimirdadod();

//console.log(fit.modelo);
//console.log(fit.marca);

console.log(Carro.retornar_marca());

console.log(Math.random());