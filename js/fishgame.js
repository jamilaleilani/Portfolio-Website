$(function() {


  var shark = $("#shark");
  var goldfish = $("#goldfish");

  function fishMoving(letterVal, fish, fishType) {
    $(fish).css("margin-left", "0px");
    $("html").keydown(function(whichKey) {
      var fishMarginLeft = parseInt($(fish).css("margin-left"));
      if (whichKey.keyCode === letterVal && fishMarginLeft < 1000) {
        $(fish).css("margin-left", (fishMarginLeft + 10 + "px"));
      } else if (fishMarginLeft >= 999 && $("#projectonegame h1").html() === "SHARK vs GOLDFISH") {
        $("#projectonegame h1").css("color", "magenta");
        $("#projectonegame h1").html(fishType + " wins!");
      }
    });
  }

  fishMoving(65, shark, "SHARK");
  fishMoving(76, goldfish, "GOLDFISH");


  $('#projectonegame h2').on('click', function() {
    $(shark).css("margin-left", "0%");
    $(goldfish).css("margin-left", "0%");
    $("#projectonegame h1").css("color", "white");
    $("#projectonegame h1").html("SHARK vs GOLDFISH");
  });

});

