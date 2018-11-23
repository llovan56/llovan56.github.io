// INDEX

var itemHeadline = document.querySelector('.item-headline'),
    item = document.querySelector('.item'),
    one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three'),
    four = document.querySelector('.four'),
    five = document.querySelector('.five'),
    sOne = document.querySelector('.s-one'),
    sTwo = document.querySelector('.s-two'),
    sThree = document.querySelector('.s-three'),
    sFour = document.querySelector('.s-four'),
    sFive = document.querySelector('.s-five');

one.addEventListener("mouseover", function () {
    // sOne.style.opacity = "1";
    oneHover();
});

two.addEventListener("mouseover", function () {
    // sOne.style.opacity = "1";
    twoHover();
});

function oneHover() {
    $('.s-one').fadeIn(200, function () {
        $('.s-one').css({
            // 'background':'red',
            'opacity': '1'
        });
    });
}

function twoHover() {
    $('.s-two').fadeIn(200, function () {
        $('.s-two').css({
            // 'background':'blue',
            'opacity': '1'
        });
    });
}

// one.addEventListener("mouseout", function () {
//     sOne.style.display = "none";
// });


// two.addEventListener("mouseover", function () {
//     sTwo.style.display = "block";
// });

// two.addEventListener("mouseout", function () {
//     sTwo.style.display = "none";
// });


three.addEventListener("mouseover", function () {
    sThree.style.display = "block";
});

three.addEventListener("mouseout", function () {
    sThree.style.display = "none";
});


four.addEventListener("mouseover", function () {
    sFour.style.display = "block";
});

four.addEventListener("mouseout", function () {
    sFour.style.display = "none";
});


