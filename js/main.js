

$(function() {

  //Homepage

  $("#homepage, #homepage section, #contact, #footer").show();

  $(".name").on("click", function() {
    console.log("working!");
    $("section, article").hide();
    $("#homepage, #homepage section, #contact, #footer").show();
  })


  //Nav Links

  var navLinks = function(element, hideElement, showElement) {

    $(element).each(function() {
      $(this).on("click", function() {
      //console.log("working!");
      var section = $(this).attr("href");
      //console.log(section);
      $(hideElement).hide();
      $(section).show();
      $(showElement).show();
      })
    });
  }

  navLinks("aside nav a", "section, article", ".sectionhome");
  navLinks("section nav a, section div a", ".sectionhome, article");



//Contact Form

    //checking for errors

  $("#submit").on("click", function(event) {
    event.preventDefault();
    $(".checkForError").each(function() {
      if ($(this).val() === "") {
        $(this).addClass("error");
        $(".error").show();
        $(this).siblings(".errorMessage").show();
      } else {
        $(this).removeClass("error");
        $(this).siblings(".errorMessage").hide();
      }
    });
  });

//responsive--> hamburger on click show menu

function() {
  var screenWidth = $("html").css("width");
  if ()
  $("#menu").on("click", function() {
    $("aside").toggle();
  })

}


});
