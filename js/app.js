var shark = document.querySelector("#projectonegame#shark");
var goldfish = document.querySelector("#projectonegame#goldfish");

function fishMoving(letterVal, fish, fishType) {
  fish.style.marginLeft = "0%";
  document.addEventListener('keyup', function(whichKey) {
    var fishMarginLeft = parseInt(fish.style.marginLeft, 10);
    if (whichKey.keyCode === letterVal && fishMarginLeft < 85) {
      fish.style.marginLeft = fishMarginLeft + 1 + "%";
    } else if (fishMarginLeft >= 85 && document.querySelector("h1").innerHTML == "SHARK vs GOLDFISH") {
      document.querySelector("#projectonegame h1").style.color = "magenta";
      document.querySelector("#projectonegame h1").innerHTML = fishType +" wins!";
    }
  })
}

fishMoving(65, shark, "SHARK");
fishMoving(76, goldfish, "GOLDFISH");


document.querySelector('#projectonegame h2').addEventListener('click', function() {
  console.log("reset")
  shark.style.marginLeft = "0%";
  goldfish.style.marginLeft = "0%";
  document.querySelector("#projectonegame h1").style.color = "white";
  document.querySelector("#projectonegame h1").innerHTML = "SHARK vs GOLDFISH";
})

/*$(function() {


  var shark = document.querySelector("#projectone#shark");
  var goldfish = document.getElementById("#projectone#goldfish");

  function fishMoving(letterVal, fish, fishType) {
    $(fish).css.marginLeft = "0%"
    document.addEventListener('keyup', function(whichKey) {
      console.log("fish working");
      var fishMarginLeft = parseInt($(fish).css.marginLeft, 10);
      console.log(fishMarginLeft);
      if (whichKey.keyCode === letterVal && fishMarginLeft < 85) {
        $(fish).css.marginLeft = $(fish).css.marginLeft + 1 + "%";
        console.log($(fish).css.marginLeft);
      } else if (fishMarginLeft >= 85 && document.querySelector("#projectone h1").innerHTML == "SHARK vs GOLDFISH") {
        document.querySelector("#projectone h1").style.color = "magenta";
        document.querySelector("#projectone h1").innerHTML = fishType +" wins!";
      }
    })
  }

  fishMoving(65, shark, "SHARK");
  fishMoving(76, goldfish, "GOLDFISH");


  document.querySelector('#projectone h2').addEventListener('click', function() {
    console.log("reset")
    shark.style.marginLeft = "0%";
    goldfish.style.marginLeft = "0%";
    document.querySelector("#projectone h1").style.color = "white";
    document.querySelector("#projectone h1").innerHTML = "SHARK vs GOLDFISH";
  })



});*/

