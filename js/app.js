$(function() {


  var shark = $("#shark");
  var goldfish = $("#goldfish");

  function fishMoving(letterVal, fish, fishType) {
    // TODO: Remove console logs and commented code from your development builds :)
    //console.log("working1");
    $(fish).css("margin-left", "0px");
    //console.log($(fish).css("margin-left"));
    //console.log("working2");
    $("html").keydown(function(whichKey) {
      var fishMarginLeft = parseInt($(fish).css("margin-left"));
// TODO: Remove console logs and commented code from your development builds :)
      //console.log(fishMarginLeft);
      // TODO: Can you turn the logical expression below into a variable that reads a little friendlier?
      if (whichKey.keyCode === letterVal && fishMarginLeft < 1000) {
        $(fish).css("margin-left", (fishMarginLeft + 10 + "px"));
        //console.log("hi");
      } else if (fishMarginLeft >= 999 && $("#projectonegame h1").html() === "SHARK vs GOLDFISH") {
        // TODO: This adds an inline css style, can you toggle a class on or off instead?
        $("#projectonegame h1").css("color", "magenta");
        $("#projectonegame h1").html(fishType + " wins!");
      }
    })
  }

fishMoving(65, shark, "SHARK");
fishMoving(76, goldfish, "GOLDFISH");


$('#projectonegame h2').on('click', function() {
 // console.log("reset")
  $(shark).css("margin-left", "0%");
  $(goldfish).css("margin-left", "0%");
  $("#projectonegame h1").css("color", "white");
  $("#projectonegame h1").html("SHARK vs GOLDFISH");
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


})
