var numeros = [1,2,3,4,5,6,7,8,9,10];
function filtrarpares(n){
    return n%2===0;
}

console.log(numeros);
//console.log(filtrarpares(3));
//console.log(filtrarpares(8));

function filtrarimpares(n){
    return n%2 !==0;
}

function filtrarmultiplosde5(n){
    return n % 5 ===0;
}

var ret = numeros.filter(filtrarpares);
console.log(ret);

ret = numeros.filter(filtrarimpares);
console.log(ret);

ret = numeros.filter(filtrarmultiplosde5);
console.log(ret);

var alunos = [
    {nome:'Pedro',nota: 8.5},
    {nome:'Maria', nota: 10},
    {nome: 'Fernanda', nota:9.2},
    {nome:'Ricardo', nota: 7.3},
]

function filtrarnotasmaioresque8(aluno){
    return aluno.nota > 8;
}

console.log(alunos);

var filtrados = alunos.filter(filtrarnotasmaioresque8);
console.log(filtrados);

//map é diferente de filter, pois map transforma os arrays de tamanho exato mas com valores alterados, o filter traz um array geralmente de tamanho menor porem com seleção aplicada.
