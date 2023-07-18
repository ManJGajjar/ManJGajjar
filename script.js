var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function stopWatch(){
    if(timer==true){
        count = count+1;

        if(count==100){
            sec = sec + 1;
            count = 0;
        }

        if(sec==60){
            min = min + 1;
            sec=0
        }

        if(min==60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 10){
            hrString = "0" + hrString
        }

        if(min < 10){
            minString = "0" + minString
        }

        if(sec < 10){
            secString = "0" + secString
        }

        if(count < 10){
            countString = "0" + countString
        }
        document.getElementById("Hrs").innerHTML = hrString;
        document.getElementById("Mins").innerHTML = minString;
        document.getElementById("Secs").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopWatch()",10)
    }
}

function Start(){
    timer = true;
    stopWatch();
}
function Stop(){
    timer = false;
}
function Reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

        document.getElementById("Hrs").innerHTML = hr;
        document.getElementById("Mins").innerHTML = min;
        document.getElementById("Secs").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
}