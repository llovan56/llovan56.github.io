// INDEX

var itemHeadline = document.querySelector('.item-headline'),
    item = document.querySelector('.item'),
    one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three'),
    four = document.querySelector('.four'),
    sOne = document.querySelector('#s-one'),
    sTwo = document.querySelector('#s-two'),
    sThree = document.querySelector('#s-three'),
    sFour = document.querySelector('#s-four');

one.addEventListener("mouseover", function () {
    sOne.style.display = "block";
});

one.addEventListener("mouseout", function () {
    sOne.style.display = "none";
});


two.addEventListener("mouseover", function () {
    sTwo.style.display = "block";
});

two.addEventListener("mouseout", function () {
    sTwo.style.display = "none";
});


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