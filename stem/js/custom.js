







var mainSection = document.querySelector('#main'),
    btnPageOne = document.querySelector('.btn-page-one'),
    partOne = document.querySelector('#part-one'),

    btnPageTwo = document.querySelector('#btn-page-two'),
    partTwo = document.querySelector('#part-two'),

    btnPageThree = document.querySelector('#btn-page-three'),
    partThree = document.querySelector('#part-three'),

    btnPageFour = document.querySelector('#btn-page-four'),
    partFour = document.querySelector('#part-four'),

    btnPageFive = document.querySelector('#btn-page-five'),
    partFive = document.querySelector('#part-five');

    // btnPageSix = document.querySelector('#btn-page-six'),
    // partSix = document.querySelector('#part-six');
    
    
// Transition to part one from main
btnPageOne.addEventListener("click", function () {
    mainSection.classList.toggle("hidden");
    partOne.classList.toggle("show");
});

// Transition to part two from one
btnPageTwo.addEventListener("click", function () {
    partOne.classList.toggle("hidden");
    partTwo.classList.toggle("show");
});

// Transition to part three from two
btnPageThree.addEventListener("click", function () {
    partTwo.classList.toggle("hidden");
    partThree.classList.toggle("show");
});

// Transition to part four from three
btnPageFour.addEventListener("click", function () {
    partThree.classList.toggle("hidden");
    partFour.classList.toggle("show");
});

// Transition to part five from four
btnPageFive.addEventListener("click", function () {
    partFour.classList.toggle("hidden");
    partFive.classList.toggle("show");
});