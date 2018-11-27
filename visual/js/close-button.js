var close = document.querySelector('#close-btn'),
    about = document.querySelector('.about-container'),
    aboutLink = document.querySelector('.about-link');


// show/close button

aboutLink.addEventListener("click", function () {
    $('.about-container').css({
        'display': 'flex'
    });
    // $('#header').css({
    //     'display': 'inline-flex'
    // });
});

close.addEventListener("click", function () {
    $('.about-container').css({
        'display': 'none'
    });
    // $('#header').css({
    //     'display': 'none'
    // });
    console.log('close')
});

