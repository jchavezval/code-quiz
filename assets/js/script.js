

/* counter*/

var counter = 60
var countdown = function(){
console.log(counter);
counter--;
if (counter === 0) {
    alert("Time is up!");
    clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(startCountdown, 1000);

