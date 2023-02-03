window.showStoryText = showStoryText;
window.selectTime = selectTime;
window.showMapText = showMapText;
window.selectWater = selectWater;

function selectTime(time) {

  hideButtons();

  var btnRow = document.getElementById("button-time-row"); // move buttons down
  btnRow.style.top = "95%";

  toggleTimeButton(time);

  var riverImage = document.getElementById("river-image-container");
  riverImage.src = "/images/chicago-river-map-" + time +".png";

  showStoryText(time + "-landing", time, true) // show time landing page

  resetStoryButtons(time);

  showMapText(time + "-map");

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
    elements[i].style.backgroundColor = "#f5f5f5";
    elements[i].style.color = "#707070";
  }
  var select = document.getElementById("time-button-" + time);
  select.style.backgroundColor = "#707070";
  select.style.color = "#fefefe";
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

  var x = document.getElementById(temp);
  var arrayOfElements= document.getElementsByClassName("map-text")

  for (var i=0; i<arrayOfElements.length;i++){
      arrayOfElements[i].style.display='none';
  }
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }

}


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

  element.children[0].style.backgroundColor = "white";
  element.children[0].style.color = "#707070";
  element.children[1].style.borderTop = arrowSize.concat(""," solid white");

}

function resetStoryButtons(time){

  var arrayOfElements = document.getElementsByClassName("content-" + time);

  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].children[0].style.backgroundColor = "#707070";
    arrayOfElements[i].children[0].style.color = "white";
    var arrowSize = getComputedStyle(arrayOfElements[i].children[1]).borderTop.split(" ")[0];
    console.log(arrowSize);

    arrayOfElements[i].children[1].style.borderTop = arrowSize.concat(""," solid #707070");
  }
}



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
    