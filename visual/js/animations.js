var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };
animateHTML().init();

function animation () {
    this.$('#heading').delay(1000).fadeIn(1000, function () {
        // $('#heading').animate({
        //     'opacity': '1'
        // });
    });

    this.$('#heading2').delay(1000).fadeIn(2000, function () {
        // $('#heading').animate({
        //     'opacity': '1'
        // });
    });
}  

animation();