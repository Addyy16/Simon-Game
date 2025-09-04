let h2 = document.querySelector('h2');
let body = document.querySelector('body');
let level = 0;
let started = false;

body.addEventListener('keypress', function(){
    if(started == false){
        level++ ;
        h2.innerText = `Level ${level}`;
        started = true;
    }
})