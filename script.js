let var1 = true;
document.getElementById("back").addEventListener('click', () => {
	// Change the color of a different element, for example, the body background color
	if (var1) {
		var1 = false;
		document.getElementById("back").style.color = 'blue';
	}
	else {
		var1 = true;
		document.getElementById("back").style.color = 'black';
	}
});

let var2 = true;
document.getElementById("manu").addEventListener('click', () => {
	// Change the color of a different element, for example, the body background color
	if (var2) {
		var2 = false;
		document.getElementById("manu").style.color = 'blue';
	}
	else {
		var2 = true;
		document.getElementById("manu").style.color = 'black';
	}
	alert("hello")
});
let fb = true;
let faces = document.getElementsByClassName("fb1");

for (let i = 0; i < faces.length; i++) {
	faces[i].addEventListener('click', () => {
		// Change the color of the clicked element
		if (fb) {
			fb = false;
			faces[i].style.color = 'black';
		} else {
			fb = true;
			faces[i].style.color = 'darkblue';
		}
	});
}
let yt = true;
let you = document.getElementsByClassName("yt1");

for (let i = 0; i < you.length; i++) {
	you[i].addEventListener('click', () => {
		// Change the color of the clicked element
		if (yt) {
			yt = false;
			you[i].style.color = 'black';
		} else {
			yt = true;
			you[i].style.color = 'red';
		}
	});
}

let init = true;
let inst = document.getElementsByClassName("in1");

for (let i = 0; i < inst.length; i++) {
	inst[i].addEventListener('click', () => {
		// Change the color of the clicked element
		if (init) {
			init = false;
			inst[i].style.color = 'black';
		} else {
			init = true;
			inst[i].style.color = '#E4405F';
		}
	});
}

let tw = true;
let twit = document.getElementsByClassName("tw1");

for (let i = 0; i < twit.length; i++) {
	twit[i].addEventListener('click', () => {
		// Change the color of the clicked element
		if (tw) {
			tw = false;
			twit[i].style.color = 'black';
		} else {
			tw = true;
			twit[i].style.color = 'blue';
		}
	});
}


let share1 = true;
let num1 = 0
document.getElementById("share1").addEventListener('click', () => {
	// Change the color of a different element, for example, the body background color

	if (var1) {
		var1 = false;
		document.getElementById("share1").style.color = 'red';
		num1++;
	}
	else {
		var1 = true;
		document.getElementById("share1").style.color = 'black';
		num1--;
	}
	document.getElementById("share11").innerText = num1;

});
let share3 = true;
let num3 = 0
document.getElementById("share3").addEventListener('click', () => {
	// Change the color of a different element, for example, the body background color

	if (var1) {
		var1 = false;
		document.getElementById("share3").style.color = 'blue';

	}
	else {
		var1 = true;
		document.getElementById("share3").style.color = 'black';

	}
	document.getElementById("share31").innerText = num3;
	num3++;

});


document.getElementById("share2").addEventListener('click', () => {
	document.getElementById("sec2").style.display = 'block';
	document.getElementById("sec1").style.display = 'none';
});
document.getElementById("back2").addEventListener('click', () => {
	document.getElementById("sec1").style.display = 'block';
	document.getElementById("sec2").style.display = 'none';
});


let number1 = 1;
// JavaScript code to handle form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
	event.preventDefault();
	function isEmptyInput(input) {
		// Trim leading and trailing whitespace and check if the string is empty
		return input.trim() === '';
	}
	const name = document.getElementById("name").value;
	if (isEmptyInput(name)) {
		alert('Input is empty.');
	} else {

		document.getElementById("sec2-comment").innerHTML += `${number1} ${name}`
		document.getElementById("sec2-comment").innerHTML += `<br>`
		document.getElementById("name").value = "";
		number1++;
	}


});