// 1) temos que referenciar o input

let input = document.querySelector('input[name=tarefa]');

// 2) temos que referenciar o button

let btn = document.querySelector('#botao');

// 3) temos que referenciar a lista

let lista = document.querySelector('#lista');

//card
let card = document.querySelector('.card');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; 

function renderizatTarefas() { //função le a lista do array
    //limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';
    for (tarefa of tarefas) {

        //criar o item da lista
        let itemLista = document.createElement('li');

        //Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //adicionar evento de clique no item da lista
        itemLista.onclick = function () {
            deletarTarefa(this);
        }

        //criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //adicionar texto no item da lista
        itemLista.appendChild(itemTexto);

        //adicionar item da lista na lista
        lista.appendChild(itemLista);
    }

}

renderizatTarefas();

// 1) precisamos 'escutar' o evento de clique no botao
btn.onclick = function () {
    // 2) precisamos capturar p valor digitado pelo usuario no  input
    let novaTarefa = input.value;

    if (novaTarefa !== '') {
        // 3 ) precisamos atualizar a nova tarefa na lista(array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        //executando a função para renderizar as tarefas
        renderizatTarefas();

        //limpar o input
        input.value = '';

        //limpar msgs de erro : spans
        removerspans();
        salvarDadosNoStorage();
    } else {

        //limpar msgs de erro : spans
        removerspans();

        let span = document.createElement('span');

        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('voce precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }
}

function removerspans() {
    let spans = document.querySelectorAll('span');


    for (let i = 0; i < spans.length; i++) {
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar) {
    //remove do array, e renderiza novament
    tarefas.splice(tarefas.indexOf(tar.textContent), 1); //splice remove passando 2 parametros - indice e quantidade
    renderizatTarefas();

    //salva os novos dados no banco de dados
    salvarDadosNoStorage();

}

function salvarDadosNoStorage() {
    //todo navegador web possue essa capacidade
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}