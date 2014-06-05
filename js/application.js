$(document).ready(function () {

  $(".box").mouseover( function (){
    $(this).siblings().addClass("fade")
  }).mouseout( function() {
    $(".box").removeClass("fade");
  })

  





}) ///close doc ready

