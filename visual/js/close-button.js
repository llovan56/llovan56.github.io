var close = document.querySelector('.close'),
    about = document.querySelector('.about-container'),
    aboutLink = document.querySelector('.about-link');


// show/close button

aboutLink.addEventListener("click", function () {
    about.style.display = "flex";
});

close.addEventListener("click", function () {
    about.style.display = "none";
});

// about block
var div = document.createElement('div');
    div.setAttribute('class', 'post block bc2');
    div.innerHTML = `
            <div class="about-container">
                <h1 class="sans-serif close">close</p>
                <h2 class="lite serif">who am i?</h1>
                <div class="about1">
                    <p>test</p>
                </div>
                <div class="about2">
                    <p>test2</p>
                </div>
            </div>
        `;
document.getElementById('about').appendChild(div);