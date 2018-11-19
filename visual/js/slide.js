// slidein scroll

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
  
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
            
                // $('.headline').fadeIn(2000, function () {
                //     $('.headline').animate({
                //         'opacity': '1'
                //     });
                // });
            
        }
    });
  }
  
  // if the image in the window of browser when the page is loaded, show that image
  $(document).ready(function(){
        showImages('.onScreen,.onScreen-bottom');
  });
  
  // if the image in the window of browser when scrolling the page, show that image
  $(window).scroll(function() {
        showImages('.onScreen,.onScreen-bottom');
  });