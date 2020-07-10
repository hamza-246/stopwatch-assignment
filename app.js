var min = 00;
var sec = 00;
var msec = 00;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");
var int;

function timer(){
    msec++;
    msecHead.innerHTML = msec;

    if(msec >= 100){
        sec++;
        secHead.innerHTML = sec;
        msec = 00;
    }
    else if(sec >= 60){
        min++;
        minHead.innerHTML = "0" + min;
        sec = 00;
    }
}
function start(){
 int = setInterval(timer,10);
 var butt = document.getElementById("butto").style.display = 'none';
}
function stop(){
 clearInterval(int);
 var butt = document.getElementById("butto").style.display = 'inline';
}
function reset(){
    min = 00;
    sec = 00;
   msec = 00;
   minHead.innerHTML = "00";
   secHead.innerHTML = "00";
   msecHead.innerHTML = "00";
   clearInterval(int);
   var butt = document.getElementById("butto").style.display = 'inline';
}
