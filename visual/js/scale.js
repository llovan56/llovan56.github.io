

function initialize() {
    var adSlot = document.getElementById('ad-slot'),
        query = getQueryParams(document.location.search),
        device = query.device || '';

    // kick everything off with the right device
    init(device);

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
             window.ad.style.transform = 'scale(' + ((ratio > .5) ? .5 : ratio) + ')';
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