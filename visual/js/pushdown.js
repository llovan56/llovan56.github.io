var clickAd = document.querySelector('.click-ad'),
    pushdown = document.querySelector('#pushdown');


// show/close button

clickAd.addEventListener("click", function () {
    // if (pushdown.classList = "visible") {
    //     pushdown.className.replace('hide');
    // }
    // else {
    //     pushdown.className.replace('hide');
    //     console.log('click')
    // }


    pushdown.classList.toggle('hide');
    
});

// clickAd.addEventListener("click", function () {
//     if (pushdown.classList = "hide") {
//         pushdown.classList.add('visible');
//         pushdown.classList.remove('hide');
//     }

// });

// clickAd.addEventListener("click", function () {
//     this.pushdown.toggle('visible');
//     this.pushdown.toggle('hide');
//     console.log('click')
// });

// function classToggle() {
//     this.classList.toggle('visible');
//     this.classList.toggle('hide');
// }
// document.querySelector('.click-ad').addEventListener('click', classToggle);