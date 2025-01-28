//typing text effect

var text = document.getElementById('typing').innerText;
const typingElement = document.getElementById('typing');
let index = 0;

function typeText() {
  typingElement.textContent = ''; 
  index = 0; 
  function typeCharacter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, 100); 
    }
  }

  typeCharacter();
}

window.onload = () => {
  typeText(); 
  setInterval(typeText, 4000);
};
