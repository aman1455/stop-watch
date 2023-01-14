
var hour = 0;
var min = 0;
var sec =0;

// creating a variable for run function
var timing = false;

// create a function  when user  click on start  
function start(){
    timing = true;
    stopWatch();
   
}

// create a function  when user  click on stop  
function stop(){
    timing = false;

}

// create a function  when user  click on reset
function reset(){

    timing = false;
    hour=0;
    min=0;
    sec=0;
    document.getElementById("sec").innerHTML= sec;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('hours').innerHTML = hour;
    

}


// creating main fuction who will start stop watch
function stopWatch(){
    if(timing == true){
        sec = sec+1;
       
        if(sec== 60){
            sec = 0;
            min = min + 1;

        }
        if(min == 60){
            min = 0;
            hour = hour + 1;
        }
         


        document.getElementById('sec').innerHTML = sec;
        document.getElementById('minute').innerHTML = min;
      setTimeout( "stopWatch()", 1000)
    }
}

