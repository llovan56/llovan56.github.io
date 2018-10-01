// To scroll right

function scrollIt(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': element.offsetLeft,
      'position': 'static',
      'top': 0
    });
}
  
  const btns = document.querySelectorAll('.btn-page');
  const sections = document.querySelectorAll('.story');
  
  btns[0].addEventListener('click', () => {
    scrollIt(sections[0]);
    console.log('click')
  });
  
  btns[1].addEventListener('click', () => {
    scrollIt(sections[1]);
  });
  
  btns[2].addEventListener('click', () => {
    scrollIt(sections[2]);
  });
  
  btns[3].addEventListener('click', () => {
    scrollIt(sections[3]);
  });

  btns[4].addEventListener('click', () => {
    scrollIt(sections[4]);
  });

  // btns[5].addEventListener('click', () => {
  //   scrollIt(sections[5]);
  // });



// headline

var birthHeadline = document.querySelector('.birth-headline');

function headlineScroll() {

  document.addEventListener('load', () => {
    $('.birth-headline').fadeIn(500, function () {
      $('.birth-headline').animate({
          'opacity': '1'
      });
      console.log('test');
    });
  });
}


headlineScroll();




  // To scroll left

  function scrollLeft(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      // 'left': '1000px',
      'margin-left': '-50%',
      'position': 'static',
      // 'right': element.offsetLeft,
      'top': 0
    });
  }
  