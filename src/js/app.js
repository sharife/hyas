window.showStoryText = showStoryText;
window.selectTime = selectTime;
window.showMapText = showMapText;
window.selectWater = selectWater;
window.toggleMobile = toggleMobile;
window.showGlossary = showGlossary;
window.autoScroll = autoScroll;


import '@splidejs/splide/css';

import Splide from '@splidejs/splide';

let HOME_STACK_BREAKPOINT = 1400;

function selectTime(time) {
  hideButtons();
  var btnRow = document.getElementById("button-time-row"); // move buttons down
  btnRow.style.bottom = "5%";
  toggleTimeButton(time);

  var riverImage = document.getElementById("river-image");
  riverImage.style.backgroundImage = 'url(/images/chicago-river-map-' + time +".png)";
  showStoryText(time + "-landing", time, true) // show time landing page
  resetStoryButtons(time);
  showMapText(time);
  var elements = document.getElementsByClassName("content-" + time);
  for(var i=0; i < elements.length; i++) { 
    elements[i].style.display = "block";
  }
}

function selectWater(x) {
  var x = document.getElementById(x);
  var arrayOfElements= document.getElementsByClassName("story")
  for (var i=0; i<arrayOfElements.length;i++){
      arrayOfElements[i].style.display='none';
  }
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
}


function toggleTimeButton(time){
  var elements = document.getElementsByClassName("time-button");
  for(var i=0; i < elements.length; i++) { 
    elements[i].style.backgroundColor = "var(--index-button-default)";
    elements[i].style.color = "var(--index-on-button-default)";
  }
  var select = document.getElementById("time-button-" + time);
  select.style.backgroundColor = "var(--index-button-select)";
  select.style.color = "var(--index-on-button-select)";
}

function hideButtons() {
  var temp = ["content-past", "content-future", "content-present"]
  for(var i = 0; i< temp.length; i++){
    var elements = document.getElementsByClassName(temp[i]);
    for(var j=0; j < elements.length; j++) { 
      elements[j].style.display = "none";
    }
  }
}


function showMapText(temp) {
  var web = document.getElementById(temp + "-map");
  var arrayOfElements = document.getElementsByClassName("map-text");

  for (var i=0; i<arrayOfElements.length;i++){
      arrayOfElements[i].style.display='none';
  }

  var mobile = document.getElementById(temp + "-map-mobile");
  arrayOfElements = document.getElementsByClassName("map-text-mobile");

  for (var i=0; i<arrayOfElements.length;i++){
      arrayOfElements[i].style.display='none';
  }

  if(window.innerWidth <= HOME_STACK_BREAKPOINT){
    if (mobile.style.display === "none") {
      mobile.style.display = "block";
    } else {
      mobile.style.display = "none";
    }
  }
  else {
    if (web.style.display === "none") {
      web.style.display = "block";
    } else {
      web.style.display = "none";
    }
  }
}
addEventListener("load", (event) => {

  if(window.location.pathname == "/") {
    var web = document.getElementById("landing-map");
    var mobile = document.getElementById("landing-map-mobile");

    if( window.innerWidth <= HOME_STACK_BREAKPOINT) {
      mobile.style.display = "block";
    } else {
      web.style.display = "block";
    }
  }

  var elms = document.getElementsByClassName( 'splide' );
  if(elms != null){
    for ( var i = 0; i < elms.length; i++ ) {
      new Splide( elms[ i ], 
      {
        heightRatio: 0.5
      } ).mount();
    }
  }
});


function showStoryText(storyId, time, isLanding) {
  selectStoryButton(storyId, time, isLanding);
  var x = document.getElementById(storyId);
  var arrayOfElements= document.getElementsByClassName("story")
  for (var i=0; i<arrayOfElements.length;i++){
      arrayOfElements[i].style.display='none';
  }
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
}


function selectStoryButton(storyId, time, isLanding) {
  if(isLanding == true) {
    return;
  }
  resetStoryButtons(time);
  var element = document.getElementById(time + "-" + storyId);
  var arrowSize = getComputedStyle(element.children[1]).borderTop.split(" ")[0];
  element.children[0].style.backgroundColor = "var(--index-button-select)";
  element.children[0].style.color = "var(--index-on-button-select)";
  element.children[1].style.borderTop = arrowSize.concat(""," solid var(--index-button-select)");
}


function resetStoryButtons(time){

  var arrayOfElements = document.getElementsByClassName("content-" + time);
  for (var i=0; i<arrayOfElements.length;i++){

    arrayOfElements[i].children[0].style.backgroundColor = "var(--index-button-default)";
    arrayOfElements[i].children[0].style.color = "var(--index-on-button-default)";
    var arrowSize = getComputedStyle(arrayOfElements[i].children[1]).borderTop.split(" ")[0];
    arrayOfElements[i].children[1].style.borderTop = arrowSize.concat(""," solid var(--index-button-default)");
  }
}

function autoScroll(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({behavior: 'smooth'}, true)
}


var glossaryToggle = ""

function showGlossary(id) {
  var arrayOfElements = document.getElementsByClassName("glossary-text");
  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].style.display = "none";
  }
  if(glossaryToggle === "" || glossaryToggle !== id){
    var element = document.getElementById(id);
    element.style.display = "block";
    glossaryToggle = id;
  } else {
    var element = document.getElementById("base");
    element.style.display = "block";
    glossaryToggle = ""
  }
}


function toggleMobile() {
	$('#mobile-menu').fadeToggle();
}

$(function() {
  $( ".accordion" ).accordion({heightStyle: 'panel'});
});




// As A jQuery Plugin -->
var gallery = $('.gallery a').simpleLightbox({
  /* options */
});


// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    