const buttonRight = document.querySelector('.button-arrow.-right')
const buttonLeft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements')
let pixels = 100;

buttonRight.addEventListener('click', function() {
    pixels = pixels + 100;
   elements.style = `transform: translateX(${pixels}px)`;
});

buttonLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`; 
});