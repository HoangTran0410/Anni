// Set the date we're counting down to
var countDownDate = new Date("October 4, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";

		// If the count down is finished, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("countdown").innerHTML = "EXPIRED";
		}
	}, 1000);


// compare image
// function initComparisons() {
// 	var x, i;
// 	/*find all elements with an "overlay" class:*/
// 	x = document.getElementsByClassName("img-comp-overlay");
// 	for (i = 0; i < x.length; i++) {
// 		/*once for each "overlay" element:
// 		pass the "overlay" element as a parameter when executing the compareImages function:*/
// 		compareImages(x[i]);
// 	}

// 	function compareImages(img) {
// 		var slider, img, clicked = 0, w, h;
// 		/*get the width and height of the img element*/
// 		w = img.offsetWidth;
// 		h = img.offsetHeight;
// 		/*set the width of the img element to 50%:*/
// 		img.style.width = (w / 2) + "px";
// 		/*create slider:*/
// 		slider = document.createElement("DIV");
// 		slider.setAttribute("class", "img-comp-slider");
// 		/*insert slider*/
// 		img.parentElement.insertBefore(slider, img);
// 		/*position the slider in the middle:*/
// 		slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
// 		slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
// 		/*execute a function when the mouse button is pressed:*/
// 		slider.addEventListener("mousedown", slideReady);
// 		/*and another function when the mouse button is released:*/
// 		window.addEventListener("mouseup", slideFinish);
// 		/*or touched (for touch screens:*/
// 		slider.addEventListener("touchstart", slideReady);
// 		 /*and released (for touch screens:*/
// 		window.addEventListener("touchstop", slideFinish);
		
// 		function slideReady(e) {
// 			/*prevent any other actions that may occur when moving over the image:*/
// 			e.preventDefault();
// 			/*the slider is now clicked and ready to move:*/
// 			clicked = 1;
// 			/*execute a function when the slider is moved:*/
// 			window.addEventListener("mousemove", slideMove);
// 			window.addEventListener("touchmove", slideMove);
// 		}
		
// 		function slideFinish() {
// 			/*the slider is no longer clicked:*/
// 			clicked = 0;
// 		}
		
// 		function slideMove(e) {
// 			var pos;
// 			/*if the slider is no longer clicked, exit this function:*/
// 			if (clicked == 0) return false;
// 			/*get the cursor's x position:*/
// 			pos = getCursorPos(e)
// 			/*prevent the slider from being positioned outside the image:*/
// 			if (pos < 0) pos = 0;
// 			if (pos > w) pos = w;
// 			/*execute a function that will resize the overlay image according to the cursor:*/
// 			slide(pos);
// 		}
		
// 		function getCursorPos(e) {
// 			var a, x = 0;
// 			e = e || window.event;
// 			/*get the x positions of the image:*/
// 			a = img.getBoundingClientRect();
// 			/*calculate the cursor's x coordinate, relative to the image:*/
// 			x = e.pageX - a.left;
// 			/*consider any page scrolling:*/
// 			x = x - window.pageXOffset;
// 			return x;
// 		}
		
// 		function slide(x) {
// 			/*resize the image:*/
// 			img.style.width = x + "px";
// 			/*position the slider:*/
// 			slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
// 		}
// 	}
// }

// dragable div
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function getRndInteger(min, max) {
    return Math.random() * (max - min)  + min;
}

function newObjectDragable(str, posx, posy, color){
	var newDiv = document.createElement('div');
	newDiv.classList.add("heartsDrag");
	newDiv.innerHTML = str;
	if(color) newDiv.style.color = color;
	dragElement(newDiv);
	newDiv.style.top = (posy || getRndInteger(0, height)) + "px";
	newDiv.style.left = (posx || getRndInteger(0, width)) + "px";
	document.getElementsByTagName('body')[0].appendChild(newDiv);
}

var max = 0.5, min = -1;
var arrStr = ['&#9752;', '&#9753;', '&#9835;', '&#9836;', '&#9829;'];
var strCol = ['#8f8', '#8f8', '#ff4', '#fa4', null]
var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

var height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

window.onload = ()=>{
	// initComparisons();

	for(var i = 0; i < 10; i++){
		var index = Math.floor(Math.random() * arrStr.length);
		var str = arrStr[index];
		newObjectDragable(str, null, null, strCol[index]);
	}


	setInterval(function() {
		var dragdiv = document.getElementsByClassName('heartsDrag');
		for(var d of dragdiv){
			d.style.top = (d.offsetTop + getRndInteger(-3, -1)) + "px";
			d.style.left = (d.offsetLeft + getRndInteger(-2, 2)) + "px";

			if(d.offsetTop > height - d.offsetHeight) d.style.top = d.offsetHeight + "px";
			else if(d.offsetTop < d.offsetHeight) d.style.top = height - d.offsetHeight + "px";

			if(d.offsetLeft > width - d.offsetWidth) d.style.left = d.offsetWidth + "px";
			else if(d.offsetLeft < d.offsetWidth) d.style.left = width - d.offsetWidth + "px";
		}
	}, 34);
}
