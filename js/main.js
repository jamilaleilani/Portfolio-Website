

$(function() {

  //Homepage

  $("#homepage, #homepage section, #contact, #footer").show();

  $(".name").on("click", function() {
    console.log("working!");
    $("section, article").hide();
    $("#homepage, #homepage section, #contact, #footer").show();
  })


  //Side Nav Links

  $("aside nav a").each(function() {
    $(this).on("click", function() {
    //console.log("working!");
    var sectionID = $(this).attr("href");
    console.log(sectionID);
    $("section, article").hide();
    $(sectionID).show();
    $(".sectionhome").show();
    })
  });

//Seciton Nav Links
  $("section nav a, section div a").each(function() {
    $(this).on("click", function() {
    //console.log("working!");
    var section = $(this).attr("href");
    //console.log(section);
    $(".sectionhome, article").hide();
    $(section).show();
    })
  });

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



});
