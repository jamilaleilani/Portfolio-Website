

$(function() {

  //Side Nav Links
  $("aside a").each(function() {
    $(this).on("click", function() {
    console.log("working!");
    var sectionID = $(this).attr("href");
    var section = "section" + sectionID;
    console.log(section);
    $("section").hide();
    $(section).show();
    })
  });

//Seciton Nav Links
  $("section a").each(function() {
    $(this).on("click", function() {
    console.log("working!");
    var sectionID = $(this).attr("href");
    var section = "article" + sectionID;
    console.log(section);
    $("article").hide();
    $(section).show();
    })
  });



});
