
window.showText = showText;


// var collection1 = document.getElementById("Index one*").addEventListener("click", showText("Index one"))
// var collection2 = document.getElementById("Index 2*").addEventListener("click", showText("Index 2"))



// var collection = document.getElementsByClassName("content-button");

// console.log(collection)

// for (var i=0; i<collection.length;i++){

//       // collection[i].addEventListener("click", showText(collection[i].id.slice(0,-1)))
//       collection[i].onclick = showText(collection[i].id.slice(0,-1))
// }
// console.log(collection)


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
    