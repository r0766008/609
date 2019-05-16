$(function () {
    var vandaag = new Date();
    $('#time').text(vandaag.getFullYear());

    var grootte = $('nav li').css('font-size');
    var hover_grootte = parseInt(grootte) + 3;
    var na_hover = parseInt(hover_grootte) - 3;
    $('nav li').hover(function () {
        $(this).css('font-size', hover_grootte + "px");
        if ($(this).attr("class") != "nav-item active") {
            $(this).children("div").css('display', "block");
            $(".nav-item.active").children("div").css('display', "none");
            $(".nav-item.active").children("a").css('color', "rgba(0, 0, 0, 0.5)");
        }
    }, function () {
        $(this).css('font-size', na_hover + "px");
        if ($(this).attr("class") == "nav-item active") {
            $(this).children("div").css('display', "block");
        } else {
            $(this).children("div").css('display', "none");
            $(".nav-item.active").children("div").css('display', "block");
            $(".nav-item.active").children("a").css('color', "rgba(0, 0, 0, 0.7)");
        }
    });
});