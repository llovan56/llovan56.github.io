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




// To scroll down

function scrollIt(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'position': 'fixed',
      'top': element.offsetTop,
    //   'translate': 'translateY(100%)'
    });
}
  
  const btns = document.querySelectorAll('.btn-page');
  const sections = document.querySelectorAll('.story');
  var info = document.querySelectorAll('.info');
  
  btns[0].addEventListener('click', () => {
    scrollIt(sections[0]);
    console.log('click')
  });
  
  btns[1].addEventListener('click', () => {
    scrollIt(info[0]);
  });
  
  btns[2].addEventListener('click', () => {
    scrollIt(info[1]);
  });
  
  btns[3].addEventListener('click', () => {
    scrollIt(info[2]);
  });

  btns[4].addEventListener('click', () => {
    scrollIt(info[3]);
  });

