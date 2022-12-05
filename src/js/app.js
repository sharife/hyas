
window.showText = showText;
window.selectTime = selectTime;


function selectTime(time) {



  hideButtons();

  var btnRow = document.getElementById("button-time-row"); // move buttons down
  btnRow.style.marginTop = "90vh";
  var background = document.getElementById("background-img");

  background.style.backgroundImage = "url(/images/chicago-river-map-" + time +".svg)";

  showText(time + "-landing") // show time landing page


  // show time specific buttons

  var elements = document.getElementsByClassName("content-" + time);

  for(var i=0; i < elements.length; i++) { 
    elements[i].style.display = "block";
  }
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



function showText(temp) {
      var x = document.getElementById(temp);
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
    