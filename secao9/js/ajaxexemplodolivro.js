var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.github.com/',true);
xhr.send(null);


xhr.onload = function(){
    if(xhr.status ===200){    
        document.getElementById('content').innerHTML = xhr.responseText;
        
    }
};