$(document).ready(function(){
    $(".nav-link").hover(function(){
        $(this).css("color", "wheat");
    }, function(){
        $(this).css("color", "rgba(255,255,255,.5)");
    });
});