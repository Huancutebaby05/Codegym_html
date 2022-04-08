$(window).scroll(function () {
    let otop = $(".section-1").offset().top - window.innerHeight;
    if ($(window).scrollTop() > otop) {
        $(".navbar").addClass("stick");
    } else {
        $(".navbar").removeClass("stick");
}   
})


// gioi thiee sach
let nCount = selector => {
    $(selector).each(function() {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing:"swing",

            step: function(value) {
                $(this).text(Math.ceil(value))
            }
        })
    })
}
let position = 0;
$(window).scroll(function() {
    let otop = $(".number").offset().top - window.innerHeight;
    if(position == 0 && $(window).scrollTop() >= otop) {
        position++;
        nCount(".count > p");
    }
})