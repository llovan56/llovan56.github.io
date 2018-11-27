// slidein scroll

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
  
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
            // slide to right
            $('.slideRight').css({
                // 'background-color':'red',
                'left': '0',
                'opacity':'1'
            });

            $('.slideLeft').css({
                // 'background-color':'red',
                'right': '0',
                'opacity':'1'
            });

            $('.slideUp').css({
                // 'background-color':'red',
                'bottom': '0',
                'opacity':'1'
            });
            $('.fade').css({
                'opacity':'1'
            });

            $('.color').css({
                'width':'150px'
            });
        }
    });
}


  
// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.onScreen,.slideRight,.slideLeft,.slideUp,.colorWt');
});
  
// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.onScreen,.slideRight,.slideLeft,.slideUp');
});