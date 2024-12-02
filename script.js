// Typing effect for hero section
document.addEventListener('DOMContentLoaded', () => {
  const typedText = document.querySelector('.hero .typed-text');
  const textArray = ['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast'];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function typeHero() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeHero, typingDelay);
    } else {
      setTimeout(eraseHero, newTextDelay);
    }
  }

  function eraseHero() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseHero, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(typeHero, typingDelay + 500);
    }
  }

  setTimeout(typeHero, newTextDelay + 250);
});

// Typing effect for navbar
document.addEventListener('DOMContentLoaded', () => {
  const navbarTypedText = document.querySelector('.navbar-typing .typing-text');
  const navbarText = 'cd/portfolio';
  const navbarTypingDelay = 150;
  let navbarCharIndex = 0;

  function typeNavbar() {
    if (navbarCharIndex < navbarText.length) {
      navbarTypedText.textContent += navbarText.charAt(navbarCharIndex);
      navbarCharIndex++;
      setTimeout(typeNavbar, navbarTypingDelay);
    }
  }

  typeNavbar();
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Modal Functionality
const projectItems = document.querySelectorAll('.project-item');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

projectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const modalId = item.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

// Remove Skill Bars Animation
// Removed the skill bars animation code as per your request

// Hover Animations for Sections
const allSections = document.querySelectorAll('.section');

allSections.forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.style.transform = 'scale(1.02)';
    section.style.backgroundColor = '#1a1a1a';
  });

  section.addEventListener('mouseout', () => {
    section.style.transform = 'scale(1)';
    section.style.backgroundColor = 'transparent';
  });
});
