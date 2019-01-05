$(document).ready(function(){

  // var changeGraphic = function(value){
  //   $('#graphicSet1').fadeOut("slow");
  //   $('#graphicSet2').fadeOut("slow");
  //   $('#graphicSet3').fadeOut("slow");
  //   $('#graphicSet'+value).fadeIn("slow");
  // }

  $('#graphic1_btn').click(function(){
    $('#graphicSet1').hide();
    $('#graphicSet2').hide();
    $('#graphicSet3').hide();
    $('#graphicSet4').hide();
    $('#graphicSet1').fadeIn("slow");
  });
  $('#graphic2_btn').click(function(){
    $('#graphicSet1').hide();
    $('#graphicSet2').hide();
    $('#graphicSet3').hide();
    $('#graphicSet4').hide();
    $('#graphicSet2').fadeIn("slow");
  });
  $('#graphic3_btn').click(function(){
    $('#graphicSet1').hide();
    $('#graphicSet2').hide();
    $('#graphicSet3').hide();
    $('#graphicSet4').hide();
    $('#graphicSet3').fadeIn("slow");
  });
  $('#graphic4_btn').click(function(){
    $('#graphicSet1').hide();
    $('#graphicSet2').hide();
    $('#graphicSet3').hide();
    $('#graphicSet4').hide();
    $('#graphicSet4').fadeIn("slow");
  });

});
