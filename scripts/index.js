window.onload=function ()
	{
		var c = [14,15,16,18,19,20,22,23,27,28];
		var arr = [];
		targetNumber = c[parseInt(Math.random()*10)];
		// for(var i = 0; i < targetNumber; i++){
		// 	arr[i] = i + 1;
		// }
		// console.log(arr);
		document.getElementById("targetNumber").innerHTML=targetNumber;

		oLi = document.getElementsByClassName("ucn");
		for(var j = 0;j < 3; j++){
			oLi[j].addEventListener("click",changeNumber);
		}
	}

	function changeNumber(event)
	{
		targetNumber=document.getElementById("targetNumber").innerHTML;
		ucn=parseInt(event.target.innerHTML);
		if((ucn%4)==((targetNumber-1)%4)&&ucn!=(targetNumber-1))
		{ //当user choose number等于关键数时
			ccn=parseInt(ucn)+1;
			$("ccn1").innerHTML=ccn;
			$("ucn1").innerHTML=ccn+1;
			$("ucn2").innerHTML=ccn+2;
			$("ucn3").innerHTML=ccn+3;
		}
		else if(ucn==(targetNumber-1))
		{
			ccn=parseInt(ucn)+1;
			$("ccn1").innerHTML=ccn;
			alert("You Win!\n点击确定按钮进入主页吧！");
			window.open("Home.html","_parent");
		}
		else//当user choose number不等于关键数时
		{
			var number;//number为computer choose number输出的数字个数
			number=Math.floor(ucn/4); //对ucn取整
			number=number*4+((targetNumber-1)%4)-ucn;
			if(number<0)
			{
				number+=4;
			}
			ccn=ucn+1;
			switch(number)
			{
				case 1: $("ccn1").innerHTML=ccn;
						$("ccn2").innerHTML="";
						$("ccn3").innerHTML="";
						$("ucn1").innerHTML=ccn+1;
						$("ucn2").innerHTML=ccn+2;
						$("ucn3").innerHTML=ccn+3;
				break;
				case 2: $("ccn1").innerHTML=ccn;
					    $("ccn2").innerHTML=ccn+1;
					    $("ccn3").innerHTML="";
					    $("ucn1").innerHTML=ccn+2;
						$("ucn2").innerHTML=ccn+3;
						$("ucn3").innerHTML=ccn+4;
				break;
				case 3: $("ccn1").innerHTML=ccn;
					    $("ccn2").innerHTML=ccn+1;
					    $("ccn3").innerHTML=ccn+2;
					    $("ucn1").innerHTML=ccn+3;
						$("ucn2").innerHTML=ccn+4;
						$("ucn3").innerHTML=ccn+5;
				break;
				default:
			}
			if(ccn>=(targetNumber-3))
			{
				$("ucn2").innerHTML="";
				$("ucn3").innerHTML="";
				alert("You Lose╮(╯_╰)╭\nTry Again！");
				window.location.reload() ;
			}
		}
		function $(str) {return(document.getElementById(str));}
	}


var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '(つェ⊂)我藏好了哦~ ' + OriginTitile;
        clearTimeout(titleTime);
    }
    else {
        document.title = '(*´∇｀*) 被你发现啦~ ' + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});
