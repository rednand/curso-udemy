//Funções Construtoras
function pessoa(n,s, raca = "Humana"){
    //atributos privados só pode ser acessado dentro da funcção construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo publico pode ser acessado fora da funcção construtora
    this.raca = raca;

    //atributos privados só pode ser acessado dentro da funcção construtora
    let imprimir_dados = function(){
        console.log(`Nome:${nome}, idade: ${idade}, peso:${peso},altura:${altura},sexo${sexo},raca:${raca}`);
    }

    //atributo publico pode ser acessado fora da funcção construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }

}

//instanciando um objeto
const angelina = new pessoa('Angelina','Feminino')

console.log(angelina); //nada do que é privado foi apresentado pois é privado

console.log(angelina.peso); //privado
console.log(angelina.raca); //publico

angelina.fazer_aniversario() //publico
angelina.fazer_aniversario() //publico
angelina.fazer_aniversario() //publico
angelina.fazer_aniversario() //publico
angelina.fazer_aniversario() //publico

//instanciar um novo objeto
const felicity = new pessoa('felicity','Feminino');
felicity.fazer_aniversario();

console.log(felicity.getIdade());

console.log(typeof(pessoa)); // é uma função
console.log(typeof(felicity)); // é um objeto
