
let btn = document.querySelectorAll('button');

for(let i = 0; i < btn.length; i++){
    btn[i].onclick = function(){
        document.querySelector('body').style.backgroundColor = this.style.backgroundColor;
    };
}



