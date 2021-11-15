// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }