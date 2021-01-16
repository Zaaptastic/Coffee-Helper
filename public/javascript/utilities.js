console.log("Loaded JavaScript Utilities");

var seconds = 0;
var timer;


function start(element, clr) {
	// Update the count down every 1 second
	timer = setInterval(function() {

	seconds++;

	displayMinutes = Math.floor(seconds / 60);
	displaySeconds = seconds % 60;

	if (displaySeconds < 10) {
		displaySeconds = "0" + displaySeconds;
	}
	if (displayMinutes < 10) {
		displayMinutes = "0" + displayMinutes;
	}

  // Display the result in the element with id="demo"
  document.getElementById("main-timer").innerHTML = displayMinutes + " : " + displaySeconds;

  // If the count down is finished, write some text
  if (displayMinutes >= 1) {
    clearInterval(x);
    document.getElementById("main-timer").innerHTML = "EXPIRED";
  }
}, 1000);
}

function pause(element, clr) {
	clearInterval(timer);
}

function reset(element, clr) {
	seconds = 0;
	displaySeconds = 0;
	displayMinutes = 0;
}
