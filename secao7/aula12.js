/*
JSON - JavaScript Object Notation ------ formato de texto bastante utilizado na comunicação entre sistemas(formato mais comum de API - application interface) para enviar dados
*/

const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

// console.log(curso);
// // console.log(curso.preco());
//  console.log(typeof(curso));


// // ---------------------------- Convertendo objeto JavaScript para Jason
// const json = JSON.stringify(curso);
// console.log(json); //não tem função  pois é texto
// console.log(typeof(json));

// // ---------------------------- Convertendo de JSON para JavaScript
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof(obj));

// const json_errado = "{'nome': 'prog' , 'preco': 27.99}";
// console.log(json_errado);
// console.log(typeof(json_errado));       

// const novo_obj =JSON.parse(json_errado);
// console.log(novo_obj);
// console.log(typeof(novo_obj);  // -------------------------------------------- não funciona pois tem aspas simples     


const json_corrigido = '{"nome": "prog" , "preco": 27.99}';
console.log(json_corrigido);
console.log(typeof(json_corrigido));       

const novo_obj =JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));