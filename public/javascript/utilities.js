console.log("This is coming from js/script.js");

var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var seconds = 0;
// Update the count down every 1 second
var x = setInterval(function() {

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

