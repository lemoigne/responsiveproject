$(document).foundation(),$(document).ready(function(){$(".actionMenu").bind("click",function(a){a.preventDefault();var b=$("body");b.hasClass("activeMenu")?b.removeClass("activeMenu"):b.addClass("activeMenu")})});