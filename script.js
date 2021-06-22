"use strict"
// Navigation icon mobile function
function myFunction() {
var nav = document.getElementById("myTopnav");
if (nav.className === "topnav") {
nav.className += " responsive";
} else {
nav.className = "topnav";
}
}



// Set active menu link
var menuLink = document.getElementsByClassName('link');



for(var i = 0; i < menuLink.length; i++){
menuLink[i].addEventListener("click", setActive);
}



function setActive(){
for(var i = 0; i < menuLink.length; i++){
menuLink[i].classList.remove("active");
this.classList.add("active");
}
}


var showbtn = document.getElementById("showbtn")
var img = document.getElementById("showimg")
showbtn.addEventListener("click",showbtn);
function showimg(){
  opacity.classList.add("opacity");

}
