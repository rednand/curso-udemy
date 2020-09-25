let a = document.querySelector('.link'); //--------------document é o elemento html todo ele
//-----------queryselector usa a função DOM do Javascript - o js recupera o valor dessa page pela classe(.) "link", se fosse id seria (#) e se fosse tag seria a tag diretamente

// console.log(a.innerText); //----------vai buscar o texto filho de "a"(ãncora)

// console.log(a.parentNode); // --------- vai imprimir o pai do nó (node)"a" , o body

// console.log(a.parentNode.parentNode); // ---------- vai imprimir 2 elementos acima do "a". 

// console.log(a.parentNode.parentNode.parentNode); // --------- vai imprimir 3 elementos acima do "a", o #document

// console.log(a.parentNode.parentNode.parentNode.parentNode); //  -------- null pois não tem nada acima do document

// console.log(a.parentNode.parentNode.childNodes); // ----- vai mostrar os nós que são filhos do html (o head e o body e entre o head e body tem uma linha que é o que conta a mais)

// console.log(a.parentNode.parentNode.firstChild); // --------- pega o primeiro filho do html, o head

// console.log(a.parentNode.parentNode.lastChild);// -------- pega o ultimo filho, o body

// console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);