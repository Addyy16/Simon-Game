let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow", "green", "purple"];

let h2 = document.querySelector('h2');
let level = 0;
let started = false;

document.addEventListener('keypress', function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelUp(){
    level++ ;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    console.log(randIdx);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function btnPress(){
    if(started == true){
        btnFlash(this);
    }
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}