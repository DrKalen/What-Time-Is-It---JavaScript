const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

/* for jerkier animation but better accuracy from using Date instead of depending on the browser
not to throttle the JavaScript tring to rerun the function every second
move this code to inside the function and comment out the 3 indicated lines of code. the function. */ 
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log ("Hour: " + hr + " Minute: " + min + " Seconds: " + sec);


let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;
/* End of code to move inside the function */

function runTheClock() {

/* for jerkier animation but greater accuracy move the above code 
inside the function and acomment the next 3 lines. */

   hrPosition = hrPosition+(3/360);
   minPosition = minPosition+(6/60);
   secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);