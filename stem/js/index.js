// INDEX

var itemHeadline = document.querySelector('.item-headline'),
    item = document.querySelector('.item'),
    one = document.querySelector('.one'),
    two = document.querySelector('.two');

one.addEventListener("mouseover", function () {
    itemHeadline.classList.toggle("show");
});

one.addEventListener("mouseout", function () {
    itemHeadline.classList.toggle("hidden");
});

two.addEventListener("mouseover", function () {
    itemHeadline.classList.toggle("show");
});

two.addEventListener("mouseout", function () {
    itemHeadline.classList.toggle("hidden");
});
