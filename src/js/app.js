window.showStoryText = showStoryText;
window.selectTime = selectTime;
window.showMapText = showMapText;
window.selectWater = selectWater;
window.toggleMobile = toggleMobile;
window.showGlossary = showGlossary;
window.autoScroll = autoScroll;
window.fadeStoryButtonOut = fadeStoryButtonOut;
window.fadeStoryButtonIn = fadeStoryButtonIn;
window.showHomeLanding = showHomeLanding;



import '@splidejs/splide/css';

import Splide from '@splidejs/splide';

let HOME_STACK_BREAKPOINT = 1000;
let currentLanding = "landing";
function selectTime(time) {
  pauseAudio();
  var diff = false;
  if (currentLanding != time) {
    hideButtons();
    diff = true;
  }
  if(time != null){
    updateStoryURL("time", time);
  }

  currentLanding = time;
  var btnRow = document.getElementById("button-time-row"); // move buttons down
  btnRow.style.bottom = "0%";
  toggleTimeButton(time);
  var riverImage = document.getElementById("river-image");
  riverImage.style.backgroundImage = 'url(/img/chicago-river-map-' + time +".jpg)";
  showStoryText(time + "-landing", time, true) // show time landing page
  resetStoryButtons(time);
  showMapText(time);
  if (diff == true) {
    displayStoryButtons(time);
  }
}

function displayStoryButtons(time){
  var elements = document.getElementsByClassName("content-" + time);
  $('.content-' + time).delay(500).fadeTo('slow', 1, function()
    {
        $(this).css('opacity', '1');
    }).delay(500).fadeTo('slow', 1);
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

  if (web.style.display === "none") {
    web.style.display = "block";
  }

  if (temp == "future") {
    web.style.color = "white";
  } else {
    web.style.color = "black";
  }
}
addEventListener("load", (event) => {

  if(window.location.pathname == "/") {
    var web = document.getElementById("landing-map");
    web.classList.add("fade-4");
    $('.fade-4').delay(2500).animate({'opacity':'1'},700);
    web.style.display = "block";

    redirectStory();

    var elms = document.getElementsByClassName( 'splide' );
    if(elms != null){
      for ( var i = 0; i < elms.length; i++ ) {
        new Splide( elms[ i ], {} ).mount();
      }
    }
  }

  if(window.location.pathname.substring(0,25) == "/en-espa%C3%B1ol/stories/"){
    var element = document.getElementById( 'image-carousel-spanish' );
    new Splide( element).mount();
  }
});


function showStoryText(storyId, time, isLanding) {
  selectStoryButton(storyId, time, isLanding);
  var x = document.getElementById(storyId);
  var arrayOfElements= document.getElementsByClassName("story");

  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].style.display='none';
    arrayOfElements[i].scrollTop = 0;
    arrayOfElements[i].style.opacity = 0;
    $(arrayOfElements[i]).delay(10).animate({'opacity':'1'},700);
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
  updateStoryURL("story", storyId);
  resetStoryButtons(time);
  pauseAudio();
  var element = document.getElementById(time + "-" + storyId);
  element.style.zIndex = "1";
  var arrowSize = getComputedStyle(element.children[1]).borderTop.split(" ")[0];
  element.children[0].style.backgroundColor = "var(--index-button-select)";
  element.children[0].style.color = "var(--index-on-button-select)";
  element.children[1].style.borderTop = arrowSize.concat(""," solid var(--index-button-select)");
}


function resetStoryButtons(time){
  var arrayOfElements = document.getElementsByClassName("content-" + time);
  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].style.zIndex = "0";
    arrayOfElements[i].children[0].style.backgroundColor = "var(--index-button-default)";
    arrayOfElements[i].children[0].style.color = "var(--index-on-button-default)";
    var arrowSize = getComputedStyle(arrayOfElements[i].children[1]).borderTop.split(" ")[0];
    arrayOfElements[i].children[1].style.borderTop = arrowSize.concat(""," solid var(--index-button-default)");
  }
}


function pauseAudio(){
  var arrayOfElements = document.getElementsByTagName("audio");
  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].pause();
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

function showHomeLanding(){
  var arrayOfElements= document.getElementsByClassName("story");
  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].style.display='none';
    arrayOfElements[i].scrollTop = 0;
  }
  var elements = document.getElementsByClassName("time-button");
  for(var i=0; i < elements.length; i++) { 
    elements[i].style.backgroundColor = "var(--index-button-default)";
    elements[i].style.color = "var(--index-on-button-default)";
  }
  var x = document.getElementById("landing-page");
  x.style.display = "block";
  showMapText("landing");
  currentLanding = "landing"
}

function redirectStory(){
  var searchParams = new URLSearchParams(window.location.search);
  var time = searchParams.get("time");
  var story = searchParams.get("story");
  selectTime(time);
  showStoryText(story,time,false);
}


function updateStoryURL(key, val){
  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set(key, val);
    var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
  }
}


function fadeStoryButtonOut(id, time){
  var arrayOfElements = document.getElementsByClassName("content-" + time);
  for (var i=0; i<arrayOfElements.length;i++){
    if(arrayOfElements[i].id != (time + "-" + id)){
      arrayOfElements[i].style.opacity = "0.2";
    }
  }
}

function fadeStoryButtonIn(time) {
  var arrayOfElements = document.getElementsByClassName("content-" + time);
  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].style.opacity = "1";
  }
}


function toggleMobile() {
	$('#mobile-menu').fadeToggle();
}

$(function() {
  $( ".accordion" ).accordion({heightStyle: 'panel'});
});

$(function(){  // $(document).ready shorthand
  $('.fade-1').delay(10).animate({'opacity':'1'},700);
  $('.fade-2').delay(500).animate({'opacity':'1'},700);
  $('.fade-3').delay(1000).animate({'opacity':'1'},700);
  $('.fade-4').delay(1500).animate({'opacity':'1'},700);
  $('.fade-5').delay(2500).animate({'opacity':'1'},700);
  $('.fade-6').delay(3500).animate({'opacity':'1'},700);
  $('.zoom').addClass('scaler');
});



// // As A jQuery Plugin -->
// var gallery = $('.gallery a').simpleLightbox({
//   /* options */
// });

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
    