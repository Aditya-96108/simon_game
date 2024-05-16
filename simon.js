let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let h3=document.querySelector("h3");
let h1=document.querySelector("h1");
let started=false;
let level=0;
let count=0;
let max=0;

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;
    }
    levelup();
});


document.querySelector(".start").addEventListener("click", function() {
    if (!started) {
        console.log("game is started");
        started = true;
        levelup();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}
function checkAns(idx)
{
   
    if(gameseq[idx]===userseq[idx])
    {
        if(gameseq.length==userseq.length)
        {
            setTimeout(levelup,1000);
        }
        console.log("correct color");
        count++;
    }
    else{
        h3.innerText="GAME OVER!!  press any key to start ";
        h1.innerHTML="HIGHEST SCORE:"+(max=Math.max(count,max))+"!!";
        console.log("your score was",count);
        reset();
    }
}
function levelup()
{
    userseq=[];
    level++;
    h3.innerText=`LEVEL ${level}`;
    let ranidx=Math.floor(Math.random()*4);
    let randcolor=btns[ranidx];
    let ranbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(ranbtn);
}
function btnpress()
{
    let btn=this;
    btnFlash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    count=0;
}