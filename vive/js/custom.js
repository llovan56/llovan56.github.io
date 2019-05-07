// shop page show/hide sections

var greenTea = document.querySelector('#green-tea'),
    blackTea = document.querySelector('#black-tea'),
    whiteTea = document.querySelector('#white-tea'),
    oolongTea = document.querySelector('#oolong-tea'),
    herbalTea = document.querySelector('#herbal-tea'),
    yellowTea = document.querySelector('#yellow-tea'),
    // shopIntro = document.querySelectorAll('.shop-intro'),
    sectionOne = document.querySelector('#section-one'),
    sectionTwo = document.querySelector('#section-two'),
    sectionThree = document.querySelector('#section-three'),
    sectionFour = document.querySelector('#section-four'),
    sectionFive = document.querySelector('#section-five'),
    sectionSix = document.querySelector('#section-six'),
    hide = document.querySelector('.hide'),
    show = document.querySelector('.show');


greenTea.addEventListener("click", function () {
    sectionOne.classList.add('show');
    sectionTwo.classList.remove("show");
    sectionThree.classList.remove("show");
    sectionFour.classList.remove("show");
    sectionFive.classList.remove("show");
    sectionSix.classList.remove("show");
});

blackTea.addEventListener("click", function () {
    sectionOne.classList.add('hide');
    sectionOne.classList.remove("show");
    sectionTwo.classList.add("show");
    sectionThree.classList.remove("show");
    sectionFour.classList.remove("show");
    sectionFive.classList.remove("show");
    sectionSix.classList.remove("show");
});

whiteTea.addEventListener("click", function () {
    sectionOne.classList.add('hide');
    sectionOne.classList.remove("show");
    sectionTwo.classList.remove("show");
    sectionThree.classList.add("show");
    sectionFour.classList.remove("show");
    sectionFive.classList.remove("show");
    sectionSix.classList.remove("show");
});

oolongTea.addEventListener("click", function () {
    sectionOne.classList.add('hide');
    sectionOne.classList.remove("show");
    sectionTwo.classList.remove("show");
    sectionThree.classList.remove("show");
    sectionFour.classList.add("show");
    sectionFive.classList.remove("show");
    sectionSix.classList.remove("show");
});

herbalTea.addEventListener("click", function () {
    sectionOne.classList.add('hide');
    sectionOne.classList.add('hide');
    sectionOne.classList.remove("show");
    sectionTwo.classList.remove("show");
    sectionThree.classList.remove("show");
    sectionFour.classList.remove("show");
    sectionFive.classList.add("show");
    sectionSix.classList.remove("show");
});

yellowTea.addEventListener("click", function () {
    sectionOne.classList.add('hide');
    sectionOne.classList.remove("show");
    sectionTwo.classList.remove("show");
    sectionThree.classList.remove("show");
    sectionFour.classList.remove("show");
    sectionFive.classList.remove("show");
    sectionSix.classList.add("show");
});


