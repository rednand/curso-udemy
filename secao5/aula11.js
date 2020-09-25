// //console.log(nome); //referenceError
// //qndo acontece erro o programa para 

// //tratamento de erros, ele não deixa o programa parar


// try{ //tenta fazer o comando
//     console.log(nome);
// }catch(e){//captura o erro e imprime essa frase
//     console.log('Não foi possivel imprimir nome');
//     console.log(e.name);
//     console.log(e.message);
// }

// console.log("oi...");

//lançando erros
function dividir(num1,num2){
    if(num1 === 0){ // && ERA PARA SER ASSIM (num1 ===0 (pipepipe-ou) num2 ===0)
        throw('Os valores devem ser positivos'); //lançando uma exceção - erro
    }else{
        return num1/num2;
    }
}

try{
    let ret = dividir(0,2);
    console.log(ret);
}catch(e){
    console.log('não foi possivel dividir');
}finally{
    console.log('Vamos continuar ...');
}