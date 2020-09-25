// ------------------------------------------------------criando objeto através de uma Factory Function

 const pessoal = (nome, sobrenome)=>{
     return {
         andar: () => console.log(`${nome} ${sobrenome} está andando...`)
     }
 }

 const p1 = pessoal('Felicity', 'Jones');
 console.log(p1);
// console.log(typeof(p1));
// p1.andar();

// -----------------------------------------------------criando objeto através de função construtora
 function Pessoa2(nome, sobrenome){
     this.nome = nome;
     this.sobrenome = sobrenome;
     this.andar = function(){
         console.log(`${nome} ${sobrenome} esta andando...`);
     }
 }

 const p2 = new Pessoa2('Angelina','Jolie');
 console.log(p2);
// console.log(typeof(p2));
// p2.andar();

// ------------------------------------------------------criando objeto através de uma classe
class Pessoa3{
    constructor(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this.nome} ${this.sobrenome} esta andando...`);
    }

}

const p3 = new Pessoa3('Andre','Marques');
console.log(p3);
//console.log(typeof(p3));
//p3.andar();