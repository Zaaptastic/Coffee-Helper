console.log("Loaded JavaScript Utilities");

var seconds = 0;
var timer;

var isTimerRunning = false;

function startOrPause() {
	if (!isTimerRunning) {
		isTimerRunning = true;
		document.getElementById("main-timer").setAttribute("class", "main-timer-clicked");

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
			if (displayMinutes >= 60) {
				clearInterval(timer);
				document.getElementById("main-timer").innerHTML = "EXPIRED";
			}
		}, 1000);
	} else {
		document.getElementById("main-timer").removeAttribute("class", "main-timer-clicked");
		pause();
	}
}

function pause() {
	isTimerRunning = false;
	clearInterval(timer);
}

function reset() {
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
