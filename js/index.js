const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('bodyOverflowToggle');
  })
}

const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const sliderCards = document.querySelector('.slider-cards');
const sliderCardsChildrenAmount = sliderCards.children.length - 1;
let sliderCounter = 0;

const vector = document.querySelector('.vector');
const vectorChildrenArray = Array.from(vector.children)

function arrowClickHandler (e) {
  const elem = e.target;
  if (elem.classList.contains('slider-btn-right' ) && sliderCounter < sliderCardsChildrenAmount) {
    if (sliderCounter === 0) {
      sliderBtnLeft.classList.remove('disabled');
    }
    sliderCounter++;
    sliderCards.style.transform = `translateX(-${sliderCounter * 106}%)`;
    if (sliderCounter === sliderCardsChildrenAmount) {
      sliderBtnRight.classList.add('disabled');
    }
  } else if (elem.classList.contains('slider-btn-left' ) && sliderCounter !== 0) {
    if (sliderCounter === sliderCardsChildrenAmount) {
      sliderBtnRight.classList.remove('disabled');
    }
    sliderCounter--;
    sliderCards.style.transform = `translateX(-${sliderCounter * 106}%)`;
    if (sliderCounter === 0) {
      sliderBtnLeft.classList.add('disabled');
    }
  }
  vectorChildrenArray.forEach((elem) => {
    elem.classList.remove('green-btn')
  })
  vectorChildrenArray[sliderCounter].classList.add('green-btn');
}

sliderBtnRight.addEventListener('click', arrowClickHandler);
sliderBtnLeft.addEventListener('click', arrowClickHandler);

function test (e) {
  const elem = e.target;
  if (elem.nodeName === 'BUTTON') {
    const vectorIndexOf = vectorChildrenArray.indexOf(elem);
    const clickedElem = vectorChildrenArray[vectorIndexOf];
    vectorChildrenArray.forEach((elem) => {
      elem.classList.remove('green-btn')
    })
    clickedElem.classList.add('green-btn');
    sliderCards.style.transform = `translateX(-${vectorIndexOf * 106}%)`;
    sliderBtnRight.classList.remove('disabled');
    sliderBtnLeft.classList.remove('disabled');
    if (vectorIndexOf === 0) {
      sliderBtnLeft.classList.add('disabled');
    } else if (vectorIndexOf === vectorChildrenArray.length - 1) {
      sliderBtnRight.classList.add('disabled');
    }
  } 
}

vector.addEventListener('click', test)