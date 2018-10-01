

function initialize() {
    frameOne();
    frameTwo();
    frameThree();
    frameFour();
    frameFive();
    
    var adSlot = document.getElementById('ad-slot'),
        query = getQueryParams(document.location.search),
        device = query.device || '';

    // kick everything off with the right device
    // init(device);

    function getQueryParams(qs) {
        qs = qs.split('+').join(' ');

        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    function init(device) {
        var i;
        // Desktop vs. Mobile stuff
        var isMobile = (device.substring(0, 9) === 'mobileweb');
        var deviceClass = isMobile ? 'device-phone' : 'device-tablet';


        // scale things
        var scaleAd = function () {
            if (!window.initialAdHeight) {
             window.initialAdHeight = window.ad.offsetHeight;
             return setTimeout(scaleAd, 100);
            }

            var bh = adSlot.offsetHeight,
             ratio = bh / window.initialAdHeight;
            if (ratio) {
             window.ad.style.transform = 'scale(' + ((ratio > 1) ? 1 : ratio) + ')';
            }
        };

        window.initialAdHeight = document.querySelector('.safe-area').offsetHeight;
        window.ad = document.getElementById('ad');

        // Only scale on desktop
        if (!isMobile) {
            scaleAd();
            window.addEventListener('resize', scaleAd);
        }
    }
}

// Animations
function frameOne() {
    this.$('#circle1').fadeIn(500, function () {
        $('#circle1').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle2').delay(500).fadeIn(500, function () {
        $('#circle2').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle3').delay(1000).fadeIn(500, function () {
        $('#circle3').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle4').delay(1500).fadeIn(500, function () {
        $('#circle4').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#nada').delay(2000).fadeIn(200, function () {
        $('#nada').animate({
            'height': '300px',
            'width': '300px'
        });
        $('#nada').delay(2000).fadeOut(200, function() {
            $('#nada').animate({
                'height': '320px',
                'width': '320px'
            });
        });
    });
    
};

function frameTwo() {
    this.$('#circle5').delay(2200).fadeIn(500, function () {
        $('#circle5').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle6').delay(2700).fadeIn(500, function () {
        $('#circle6').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle7').delay(3200).fadeIn(500, function () {
        $('#circle7').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle8').delay(3700).fadeIn(500, function () {
        $('#circle8').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#zip').delay(4200).fadeIn(200, function () {
        $('#zip').animate({
            'height': '300px',
            'width': '300px'
        });
        $('#zip').delay(2000).fadeOut(200, function () {
            $('#zip').animate({
                'height': '320px',
                'opacity': '0',
                'width': '320px'
            });
        });
    });
};

function frameThree() {
    this.$('#circle9').delay(4400).fadeIn(500, function () {
        $('#circle9').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle10').delay(4900).fadeIn(500, function () {
        $('#circle10').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle11').delay(5400).fadeIn(500, function () {
        $('#circle11').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#circle12').delay(5900).fadeIn(500, function () {
        $('#circle12').animate({
            'height': '1500px',
            'opacity': '0',
            'width': '1500px'
        });
    });

    this.$('#zilch').delay(6400).fadeIn(200, function () {
        $('#zilch').animate({
            'height': '300px',
            'width': '300px'
        });
        $('#zilch').delay(3500).fadeOut(200, function () {
            $('#zilch').animate({
                'height': '320px',
                'width': '320px'
            });
        });
    });
};

function frameFour() {
    this.$('#circle13').delay(6600).fadeIn(500, function () {
        $('#circle13').animate({
            'height': '1400px',
            'opacity': '0.8',
            'width': '1400px'
        });
    });

    this.$('#circle14').delay(7100).fadeIn(500, function () {
        $('#circle14').animate({
            'height': '1200px',
            'opacity': '0.6',
            'width': '1200px'
        });
    });

    this.$('#circle15').delay(7600).fadeIn(500, function () {
        $('#circle15').animate({
            'height': '1000px',
            'opacity': '0.4',
            'width': '1000px'
        });
    });

    this.$('#circle16').delay(8100).fadeIn(500, function () {
        $('#circle16').animate({
            'height': '800px',
            'opacity': '0.2',
            'width': '800px'
        });
    });

    this.$('#zero').delay(8600).fadeIn(200, function () {
        $('#zero').animate({
            'height': '300px',
            'width': '300px'
        });
        $('#zero').delay(1500).fadeOut(200, function () {
            $('#zero').animate({
                'opacity': '0',
            });
        });
    });

    this.$('#zero-headline').delay(8900).fadeIn(200, function () {
        $('#zero-headline').animate({
            'height': '300px',
            'width': '300px'
        });
        // changes in Frame 5
        $('#zero-headline').delay(1500).animate({
            'bottom': '16%',
            'height': '500px',
            'width': '500px'
        });
    });

    this.$('#bg-switch').delay(9900).fadeIn(700, function () {
        $('#bg-switch').animate({
            'opacity': '1'
        });
    });
};

function frameFive() {
    this.$('.text1').delay(11400).fadeIn(700, function () {
        $('.text1').animate({
            'left': '30%',
            'opacity': '1'
        });
    });

    this.$('.text2').delay(11400).fadeIn(700, function () {
        $('.text2').animate({
            'opacity': '1',
            'right': '24%'
        });
    });

    this.$('.cta').delay(11400).fadeIn(700, function () {
        $('.cta').animate({
            'opacity': '1'
        });
    });

    this.$('.legal').delay(11400).fadeIn(700, function () {
        $('.legal').animate({
            'opacity': '1'
        });
    });
};


$(window).load(function() {
    /* Detect Mobile/Tablet */
    isMobileTablet = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobileTablet.Android() || isMobileTablet.BlackBerry() || isMobileTablet.iOS() || isMobileTablet.Opera() || isMobileTablet.Windows());
        }
    };

    initialize();
});