//check if already playing or not
var score=0;
var playing = false;
var timer;
var timervalue=60;
document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }
    else{
        playing = true;
        document.getElementById("startreset").innerHTML = "Reset Game";
        startTimer();
        generateQA();
    }
}
 
//function timer
function startTimer(){
    //document.getElementById("timerbox").style.display = "block";
    show("timerbox");
    timer = setInterval(function(){
        timervalue-=1;
        showTimer();
        checkTimer();
    },1000);    
}

//show timer
function showTimer(){
    document.getElementById("timerboxvalue").innerHTML = timervalue;
}

//check timer
function checkTimer(){
    if(timervalue == 0){
        clearInterval(timer);
        gameOver();
    }
}

//function game over
function gameOver(){
        //document.getElementById("gameoverbox").style.display = "block";
        show("gameoverbox");
        document.getElementById("gameoverbox").innerHTML = "<p>Game Over</><p>Your Score is " + score +"</p>";
        //document.getElementById("timerbox").style.display = "none";
        hide("timerbox");
}

//generateQA
function generateQA(){
    var x;
    var y;
    var ans;
    var correctPos;
    var wrongAns;
    var answers = [ans];

    x = 1+(Math.round(Math.random()*19));
    y = 1+(Math.round(Math.random()*19));
    ans = x*y;
    correctPos = 1+(Math.round(Math.random()*3));
    
    document.getElementById("content").innerHTML = x + "x" + y;
    document.getElementById("box"+correctPos).innerHTML = ans;
    
    for(i=1;i<5;i++){
        if(i!=correctPos){
            do{
                wrongAns = 1+(Math.round(Math.random()*19))*1+(Math.round(Math.random()*19));
            }
            while(answers.indexOf(wrongAns)>-1)
            document.getElementById("box"+i).innerHTML = wrongAns;
            answers.push(wrongAns);
        }
    }
    
    for(i=1;i<5;i++){
        document.getElementById("box"+i).onclick = function(){
            if(playing == true){
                if(this.innerHTML == ans){
                        score += 1;
                        document.getElementById("scorevalue").innerHTML = score;
                        hide("wrong");
                        show("correct");
                    setTimeout(function(){
                        hide("correct");
                    },1000);
                    
                    generateQA();
                }
                else{
                    hide("correct");
                    show("wrong");
                    setTimeout(function(){
                        hide("wrong");
                    },1000);
                    setInterval(function(){
                        gameOver();
                    },800);
                }
            }
        }
    }
}

//function Hide
function hide(id){
    document.getElementById(id).style.display = "none";
}

//Function Show
function show(id){
    document.getElementById(id).style.display = "block";
}






































