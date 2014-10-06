$(document).foundation();


$(document).ready(function(){
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

