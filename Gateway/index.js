function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nheading") {
      x.className += " responsive";
    } else {
      x.className = "nheading";
    }
  }