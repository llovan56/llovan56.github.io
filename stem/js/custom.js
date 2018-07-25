// BIRTH

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
    partFive = document.querySelector('#part-five'),

    btnPageSix = document.querySelector('#btn-page-six'),
    partSix = document.querySelector('#part-six');
    
    
// Transition to part one from main
btnPageOne.addEventListener("click", function () {
    mainSection.style.display = "none";
    partOne.style.display = "block";
});




// Transition to part two from one
btnPageTwo.addEventListener("click", function () {
    partOne.style.display = "none";
    partTwo.style.display = "block";
});

// Transition to part three from two
btnPageThree.addEventListener("click", function () {
    partTwo.style.display = "none";
    partThree.style.display = "block";
});

// Transition to part four from three
btnPageFour.addEventListener("click", function () {
    partThree.style.display = "none";
    partFour.style.display = "block";
});

// Transition to part five from four
btnPageFive.addEventListener("click", function () {
    partFour.style.display = "none";
    partFive.style.display = "block";
});

btnPageSix.addEventListener("click", function () {
    partFive.style.display = "none";
    partSix.style.display = "block";
});