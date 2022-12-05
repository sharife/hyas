
window.showText = showText;
window.selectTime = selectTime;


function selectTime(time) {
  var btnRow = document.getElementById("button-time-row"); // move buttons down
  btnRow.style.marginTop = "90vh";
  var background = document.getElementById("background-img");

  background.style.backgroundImage = "url(/images/chicago-river-map-" + time +".svg)";
  // change landing page

  showText(time + "-landing")

  // show buttons
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
    