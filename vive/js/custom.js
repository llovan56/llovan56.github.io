


// shop page show/hide sections

var greenTea = document.querySelector('#green-tea'),
    blackTea = document.querySelector('#black-tea'),
    shopIntro = document.querySelector('.shop-intro'),
    sectionTwo = document.querySelector('#section-two'),
    sectionThree = document.querySelector('#section-three'),
    show = document.querySelector('.show');

greenTea.addEventListener("click", function () {
    shopIntro.classList.add("hidden");
    sectionTwo.classList.add("show");
});

blackTea.addEventListener("click", function () {
    shopIntro.classList.add("hidden");
    sectionTwo.classList.add("hidden");
    sectionThree.classList.add("show");
});



