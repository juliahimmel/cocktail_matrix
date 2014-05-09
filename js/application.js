$(document).ready(function () {

  $(".box").mouseover( function (){
    $(this).siblings().addClass("fade").css( 'background-color: blue' )
  }).mouseout( function() {
    $(".box").removeClass("fade");
  })







}) ///close doc ready

