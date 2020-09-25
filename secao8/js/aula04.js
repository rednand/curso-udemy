// let itexto = document.getElementById('produto');
// console.log(itexto);

// let spans = document.getElementsByTagName('span');

// console.log(spans);

// let eles = document.getElementsByClassName('texto');

// console.log(eles);

// --------------- ler valores

// console.log(spans[0].textContent);
// console.log(spans[1].inerHTML);

// ------------------ alterar valores
// spans[0].textContent = 'JavaScript'
// spans[1].innerHTML = 'Geek University'

// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// let inp = document.querySelector('input');//busca pela tag

// let eles = document.querySelector('.texto');//busca pela classe

// let eles2 = document.querySelectorAll('.texto');

// console.log(eles2);

// let div1 = document.querySelector('#div1'); // busca elemento pelo ID

// console.log(div1);

// let inp = document.querySelector('input[name=produto]');

// console.log(inp);


// exemplo 1 de eventos inline direto no javascript

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

//evento 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}




























































