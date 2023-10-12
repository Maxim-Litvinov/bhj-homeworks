var timerSeconds = 2

var countdown = setInterval(function () {
	timerSeconds--

	var hours = Math.floor(timerSeconds / 3600)
	var minutes = Math.floor((timerSeconds % 3600) / 60)
	var seconds = timerSeconds % 60
	var formattedTime = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds

	document.getElementById("timer").textContent = formattedTime

	if (timerSeconds === 0) {
		clearInterval(countdown)
		alert("Вы победили в конкурсе!")

		window.location.href = "primer.pdf"
	}
}, 1000)