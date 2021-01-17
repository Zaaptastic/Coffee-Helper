console.log("Loaded JavaScript Utilities");

var seconds = 0;
var timer;


function start(element, clr) {
	// Make the first second quicker so it doesn't feel as bad to click the button
	seconds++;
	displayMinutes = Math.floor(seconds / 60);
	displaySeconds = seconds % 60;
  	updateTimerView(displayMinutes, displaySeconds);

	// Update the count down every 1 second
	timer = setInterval(function() {
		seconds++;

		displayMinutes = Math.floor(seconds / 60);
		displaySeconds = seconds % 60;

	  	updateTimerView(displayMinutes, displaySeconds);

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
	updateTimerView(0, 0);
}

function updateTimerView(minutes, seconds){
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	document.getElementById("main-timer").innerHTML = minutes + " : " + seconds;
}
