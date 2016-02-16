$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

$("body").keydown(function(samanthasevent){
     console.log(arguments)
      if (samanthasevent.which == 88) {
        $('.ryu-cool').show();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        console.log("this must be the x key");
      }
    });

$("body").keyup(function(samanthasevent){
      if (samanthasevent.which == 88) {
        $('.ryu-cool').hide();
        $('.ryu-still').hide();
        $('.ryu-ready').show();

      }
    });


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}