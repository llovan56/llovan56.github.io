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
  
  const btnsLeft = document.querySelectorAll('.btn-page-left');
  const sectionsLeft = document.querySelectorAll('.card');
  const main = document.querySelector('#main'),
        one = document.querySelector('#part-one'),
        two = document.querySelector('#part-two');
  
  btnsLeft[0].addEventListener('click', () => {
    scrollLeft(sectionsLeft[0]);
    console.log('click left')
  });
  
  btnsLeft[1].addEventListener('click', () => {
    scrollLeft(sectionsLeft[1]);
    console.log('click left2')
  });
  
  btnsLeft[2].addEventListener('click', () => {
    scrollLeft(sectionsLeft[2]);
  });
  
  btnsLeft[3].addEventListener('click', () => {
    scrollLeft(sectionsLeft[3]);
  });

  btnsLeft[4].addEventListener('click', () => {
    scrollLeft(sectionsLeft[4]);
  });

  btnsLeft[5].addEventListener('click', () => {
    scrollLeft(sectionsLeft[5]);
  });

  // btnsLeft[6].addEventListener('click', () => {
  //   scrollLeft(sectionsLeft[6]);
  // });