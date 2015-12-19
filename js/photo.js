function setImage(src, alt, credit) {
		document.images.holder.src="images/loading.gif";
		document.images.holder.src=src;
		document.getElementById("caption").innerHTML=alt;
		if(credit)
			document.getElementById("credit").innerHTML="&copy; "+credit;
		else
			document.getElementById("credit").innerHTML="";
		//document.getElementById("info").innerHTML = document.images.holder.width;
		//while (document.images.holder.width > 300)
			//scaleImage(src); // scale down big images
		if (document.all) { //IE
			document.getElementById("wrap").style.top=document.body.scrollTop - 10;//works great in IE
		} else { // something better, like FireFox
			document.getElementById("wrap").style.top= window.pageYOffset - 10;//Works perfectly in Firefox. Error in IE.
		}
	}

	function scaleImage(src) {
		var itsWidth = document.getElementById("holderId").style.width;
		var itsHeight = document.getElementById("holderId").style.height;
		itsWidth = itsWidth - (itsWidth * .01);
		itsHeight = itsHeight - (itsHeight * .01);
		return;	
	}

	function setImageHolder() {
		var firstThumb=document.getElementById('image_1');
		var strArr=firstThumb.src.split("thumbs");
		strArr = strArr[1].split("_tn");
		document.images.holder.src="images/" + strArr[0] + ".jpg";
		document.getElementById("caption").innerHTML=firstThumb.alt;
	}
	
/*
//Capturing The Mouse Position in IE4-6 & NS4-6
//(C) 2000 www.CodeLifter.com
//Free for all users, but leave in this  header
// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false;
// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE);
// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;
// Temporary variables to hold mouse x-y pos.s
var tempY = 0;
// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    //tempY = event.clientY + document.body.scrollTop;
	tempY = event.clientY ;//+ document.body.scrollTop;
  } else {  // grab the x-y pos.s if browser is NS
    tempY = e.pageY;
  }  
  // catch possible negative values in NS4
  if (tempY < 0){tempY = 0;}  
  return true;
} */

