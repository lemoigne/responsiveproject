$(document).foundation();


$(document).ready(function(){

    //Gestion ouverture menu
    $(".actionMenu").bind("click", function(e){
        e.preventDefault();
        var menu = $("#menu");

        if (menu.hasClass("active")) {
            menu.removeClass("active");
        } else {
            menu.addClass("active");
        }

    });
});

