let btn = document.querySelector('button');

btn.onclick = function criarParagrafo(){
    //declara a variavel de texto que sera adicionado ao paragrafo
    let textElement= '';
    
    //recupera o valor do input
    let inputValue = document.querySelector('input').value;

    //cria um elemento parágrafo
    let pElement = document.createElement('p');

    //adiciona o atributo class ao paragrafo 
    pElement.setAttribute('class','classe-p');

    //verifica se o usuario preencheu o input caso contrario coloca um texto padrão
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
    }else{
        textElement=document.createTextNode('Veio vazio ....');
    }

    //adiciona o texto como filho do paragrafo
    pElement.appendChild(textElement);

    //recupera a div
    let divElement = document.querySelector('#app');

    //adiciona o paragrafo como filho da div
    divElement.appendChild(pElement);

    //limpa o input
    document.querySelector('input').value = '';

    

}