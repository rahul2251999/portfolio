// Typing effect for the "cd/portfolio" in the navbar
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');

const text = "cd/portfolio";
let index = 0;

function type() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 150); // Adjust speed here
  }
}

type();
