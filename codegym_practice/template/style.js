$(window).scroll(function () {
    let otop = $("#section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > otop) {
        $(".navbar").addClass("stick");
    } else {
        $(".navbar").removeClass("stick");
}   
})