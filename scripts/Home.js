window.onload = function (){
	var banner = document.getElementById('banner');
	banner.onmouseover = function (){
		changeH(100);
	}
	banner.onmouseout = function (){
		changeH(0);
	}
}
var timer=null;

function changeH(iTarget){
	var drag = document.getElementById('drag');
	clearInterval(timer);
	var speed;
	timer=setInterval(function(){
		speed = (iTarget-drag.offsetHeight)/15;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(drag.offsetHeight==iTarget){
			clearInterval(timer);
		}
		else{
			drag.style.height = drag.offsetHeight+speed+'px';
		}
	},30)
}
