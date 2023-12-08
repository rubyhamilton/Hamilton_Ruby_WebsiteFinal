$(document).ready(function(){
    $("#mobile-button").click(function(){
        $("#mobile-menu").fadeIn("slow");
    });
    $("#close-menu").click(function(){
        $("#mobile-menu").fadeOut("slow");
    });
});