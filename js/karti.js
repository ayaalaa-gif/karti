$(document).ready(function() {
    $(window).on("scroll", function() {
        let dist = $(this).scrollTop()
        if (dist > 40){
            $(".navbar").addClass("scroll");
            $(".navbar .logo a").css("color", "black");
        } else {
            $(".navbar").removeClass("scroll");
            $(".navbar .logo a").css("color", "white");
        }
        $(".sec-item").each(function(el) {
            if($(this).offset().top <= dist) {
                $(".navbar ul li a").closest(".navbar").find("ul li a").removeClass("active");
                $(".navbar ul li a").eq(el).addClass("active");
            }
        })
    })
    $(".navbar ul li a").on("click",function() {
        $(this).closest('.navbar').find('ul li a').removeClass("active");
        $(this).addClass("active");
        let target = $(this).attr("href");
        console.log(target);
        $("html, body").animate({
            scrollTop: $(target).offset().top
        },500);
    })
})