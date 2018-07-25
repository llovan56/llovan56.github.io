
// Next/back functions

var greenTea = document.querySelector('#green-tea'),
    mainSection = document.querySelector('#main'),
    nextButton = document.querySelector('#next_buttom'),
    previousButton = document.querySelector('#previous_button'),
    shopIntro = document.querySelector('.shop-intro'),
    shopIntroSection = document.querySelector('.shop-intro-section'),
    sectionTwo = document.querySelector('#section-two'),
    sectionThree = document.querySelector('#section-three'),
    show = document.querySelector('.show');

var arr = [shopIntro, sectionTwo];
var i = 0;

function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we've gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = arr.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return arr[i]; // give us back the item of where we are now
}

window.addEventListener('load', function () {
    document.getElementById('main').innerHTML = arr[0]; // initial value
    document.getElementById('prev_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('main').innerHTML = prevItem();
        }
    );

    document.getElementById('next_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('main').innerHTML = nextItem();
        }
    );
});




