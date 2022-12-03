
window.showText = showText;

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