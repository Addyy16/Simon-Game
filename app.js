let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow", "green", "purple"];
let max = 0;

let h2 = document.querySelector('h2');
let highScore = document.querySelector(`.highScore`);
let level = 0;
let started = false;

document.addEventListener('keypress', function(){
    h2.classList.remove("blinking-text");
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
    userSeq = [];
    level++ ;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was ${level}<br> Press any key to restart.`;
        h2.classList.add("blinking-text");
        // document.querySelector('body').style.backgroundColor = "red";
        // setTimeout(function(){
        //     document.querySelector('body').style.backgroundColor = "white";
        // },250);
    
        if(max<level){
            max = level;
            highScore.innerText = `High Score : ${max}`;
        }
        reset();
    }
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
    
}

function btnPress(){
    if(started == true){
        let btn = this;
        btnFlash(btn);
        userColor = btn.getAttribute("id")
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    }
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}