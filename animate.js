const box1 = document.querySelector('.hero');

const backgrounds = [
  'edu.jpg',
  'childunity.jpg',
  'healthcamp.jpg',
  'health-camp.jpg',
  'graduate.jpg'
];

let currentBackgroundIndex = 0;

function changeBackgroundImage() {
  box1.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
  box1.style.backgroundSize = 'cover'; // Ensures the image covers the box area
  box1.style.backgroundPosition = 'center'; // Centers the image in the box
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

setInterval(changeBackgroundImage, 3000);

changeBackgroundImage();