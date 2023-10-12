let counter = document.getElementById('clicker__counter').innerHTML;
let lastClickTime = 0;
let clickSpeed = document.getElementById('speed').innerHTML;

function clickCookie() {
	counter++;
	document.getElementById("clicker__counter").textContent = counter;
	let cookieSize = document.getElementById("cookie").width;
	if (cookieSize === 100) {
		document.getElementById("cookie").width = 200
	} else {
		document.getElementById("cookie").width = 100
	}

	let currentTime = new Date().getTime();
	let clickInterval = currentTime - lastClickTime;
	lastClickTime = currentTime;
	speed = 1000 / clickInterval;
	document.getElementById("speed").innerText = speed.toFixed(2);
}