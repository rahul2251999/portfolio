// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Typing effect for hero section
  const typedText = document.querySelector('.hero .typed-text');
  const textArray = ['Software Engineer', 'Full Stack Developer', 'Problem Solver'];
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

  // Typing effect for navbar
  const navbarTypedText = document.querySelector('.navbar-logo .typing-text');
  const navbarText = 'cd/rahul';
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

  // Navbar background change on scroll
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(18, 18, 18, 0.9)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.background = 'rgba(18, 18, 18, 0.8)';
      navbar.style.padding = '15px 0';
    }
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
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
  const projectItems = document.querySelectorAll('.project-details-btn');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-btn');

  projectItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = item.closest('.project-item').getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Initialize Skill Bars Animation
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach((level) => {
    const skillLevel = level.getAttribute('data-skill-level');
    level.style.width = skillLevel;
  });

  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove('active');
      });
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      projectItems.forEach((item) => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Custom Cursor
  const cursor = document.querySelector('.cursor-follower');
  
  if (window.innerWidth > 768) {
    cursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    const links = document.querySelectorAll('a, button, .project-card, .social-icon');
    
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'rgba(187, 134, 252, 0.4)';
      });
      
      link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'rgba(187, 134, 252, 0.3)';
      });
    });
  }

  // Form Submission (prevent default for demo)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submission functionality would be implemented in a real environment.');
      contactForm.reset();
    });
  }

  // Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });

  // Parallax Effect for Hero Shapes
  window.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.hero-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 20;
      const xOffset = (x - 0.5) * speed;
      const yOffset = (y - 0.5) * speed;
      
      shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });
});
