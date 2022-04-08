$(window).scroll(function () {
    let otop = $("#product-menu").offset().top - window.innerHeight;
    if ($(window).scrollTop() > otop) {
        $("#header").addClass("stick");
    } else {
        $("#header").removeClass("stick");
}   
})
$(window).scroll(function () {
    let otop = $("#product-menu").offset().top - window.innerHeight;
    if ($(window).scrollTop() > otop) {
        $("help").addClass("help-visible");
    } else {
        $("help").removeClass("help-visible");
}   
})