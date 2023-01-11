
window.showStoryText = showStoryText;
window.selectTime = selectTime;
window.showMapText = showMapText;


function selectTime(time) {

  hideButtons();

  var btnRow = document.getElementById("button-time-row"); // move buttons down
  btnRow.style.bottom = "0";
  btnRow.style.marginBottom = "1vh";

  toggleTimeButton(time);

  var background = document.getElementById("background-img");

  background.style.backgroundImage = "url(/images/chicago-river-map-" + time +".png)";

  showStoryText(time + "-landing") // show time landing page
  showMapText(time + "-map")

  var elements = document.getElementsByClassName("content-" + time);

  for(var i=0; i < elements.length; i++) { 
    elements[i].style.display = "block";
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
  var arrayOfElements= document.getElementsByClassName("maptext")
  for (var i=0; i<arrayOfElements.length;i++){
      arrayOfElements[i].style.display='none';
  }
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }

}


function showStoryText(storyId, time) {


  // selectStoryButton(storyId, time);


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


function selectStoryButton(storyId, time) {

  if(time === undefined) return;

  resetStoryButtons(time);
  
  var element = document.getElementById(time + "-" + storyId);

  // if(element === undefined) return;

  element.children[0].style.backgroundColor = "white";
  element.children[0].style.color = "#707070";
  element.children[1].style.borderTop = "20px solid white";

}

function resetStoryButtons(time){

  var arrayOfElements = document.getElementsByClassName("content-" + time);

  for (var i=0; i<arrayOfElements.length;i++){
    arrayOfElements[i].children[0].style.backgroundColor = "#707070";
    arrayOfElements[i].children[0].style.color = "white";
    arrayOfElements[i].children[1].style.borderTop = "20px solid #707070";
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
    