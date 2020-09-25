//AJAX ou XMLHttpRequest -- Asynchronous JavaScript and XML

//É um recurso tecnológico

//Faz uma requisição assíncrona que não bloqueia sua tela enqnto ela acontece

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    // limpar o conteúdo da div
    div.innerHTML = " ";
    
    //instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    //abrir uma conexão //----método http = GET, POST, DELETE ...
    ajax.open('GET',`https://api.github.com/users/${input.value}`, true);

    //Enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){
       
        //criar elemento span 
        let spanNone = document.createElement('span');

        //criar variavel nome
        let txtNome = ' ';

        /*
        ajax.readyStatus -> 0 => antes da conexão ser aberta
        ajax.readyStatus -> 1 => após abrir a conexão
        ajax.readyStatus -> 2 => headers (cabeçalhos) foram recebidos
        ajax.readyStatus -> 3 => carregando o corpo da requisição (conteúdo/dados)
        ajax.readyStatus -> 4 => o conteúdo (dados) está pronto para uso
        */

        if(ajax.readyState === 4){ 
            if(ajax.status ===200){
                //transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                //se usuario possui nome
                if (usuario['name'] !== null){
                    txtNome = document.createElement('img');

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width','45px');
                    img.setAttribute('height','45px');

                    div.appendChild(img);
                    }else{
                        txtNome = document.createTextNode(`O usuário ${input.value} Não tem nome`);
                    }

                    //adc o texto ao span e o span a div
                    spanNone.appendChild(txtNome);
                    div.appendChild(spanNone);

                    //limpar input
                    input.value = ' ';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuario ${input.value}`);
                
                    //adc o texto ao span e o span a div
                    spanNone.appendChild(txtNome);
                    div.appendChild(spanNone);
            }
        }
    }
}