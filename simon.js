let gameSeq=[];
let userSeq=[];
let score=[0];

let highestScore=0;

let btns=["yellow","red","purple","green"];
let h2=document.querySelector('h2');

let h1=document.createElement('h1');
h2.insertAdjacentElement("beforebegin",h1);



let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game Started");
        h1.innerText=`Highest Score is:${highestScore}`;
        levelup();
    }

});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
            btn.classList.remove("gameFlash");
            },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
            btn.classList.remove("userFlash");
            },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(randBtn);

  
}


function checkAns(indx){
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }

    }else{
        h2.innerHTML=`Game Over. Your Score is <h1>${level}</h1> <br> Pls try again`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        score.push(level);
        highestScore=Math.max(...score);
        restart();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let btnColor =btn.getAttribute("id");
    userSeq.push(btnColor);

    checkAns(userSeq.length-1);


}

allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function restart(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}
