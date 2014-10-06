$(document).foundation();


$(document).ready(function(){

    //Gestion ouverture menu
    $(".actionMenu").bind("click", function(e){
        e.preventDefault();
        var menu = $("body");

        if (menu.hasClass("activeMenu")) {
            menu.removeClass("activeMenu");
        } else {
            menu.addClass("activeMenu");
        }

    });
});

