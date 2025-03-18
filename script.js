/**
 * Main JavaScript for Rahul Podugu's Portfolio
 * Author: Manus AI
 * Version: 2.0
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    mirror: false
  });

  // Initialize particles.js for hero background
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#64ffda', '#bd93f9']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#64ffda',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Preloader
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        preloader.classList.add('hidden');
      }, 500);
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.add('light-mode');
      themeToggle.classList.add('light-mode');
    }
    
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('light-mode');
      themeToggle.classList.toggle('light-mode');
      
      // Save theme preference
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Custom cursor follower
  const cursor = document.querySelector('.cursor-follower');
  
  if (cursor && window.matchMedia("(hover: hover)").matches) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Add active class on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, .project-card, .social-link');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('active');
      });
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('active');
      });
    });
  }

  // Typing effect for hero section
  const typedElement = document.querySelector('.typed-text');
  if (typedElement) {
    const strings = [
      'Software Engineer',
      'Full Stack Developer',
      'Problem Solver',
      'Innovator'
    ];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
      const currentString = strings[stringIndex];
      
      if (isDeleting) {
        // Deleting text
        typedElement.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        // Typing text
        typedElement.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      // If word is complete
      if (!isDeleting && charIndex === currentString.length) {
        // Pause at end of word
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typingSpeed = 500;
      }
      
      setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing effect
    setTimeout(typeEffect, 1000);
  }

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server
      // For now, we'll just show a success message
      
      const formData = new FormData(contactForm);
      const formValues = {};
      
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
      
      console.log('Form submitted:', formValues);
      
      // Show success message
      const formContainer = contactForm.parentElement;
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you soon.</p>
      `;
      
      formContainer.innerHTML = '';
      formContainer.appendChild(successMessage);
    });
  }

  // Skill logos error handling
  const skillLogos = document.querySelectorAll('.skill-logo img');
  
  skillLogos.forEach(logo => {
    logo.addEventListener('error', function() {
      // If image fails to load, replace with a fallback icon
      const skillName = this.alt;
      const fallbackIcon = document.createElement('i');
      
      // Choose appropriate fallback icon based on skill name
      let iconClass = 'fas fa-code';
      
      if (skillName.toLowerCase().includes('java')) {
        iconClass = 'fab fa-java';
      } else if (skillName.toLowerCase().includes('python')) {
        iconClass = 'fab fa-python';
      } else if (skillName.toLowerCase().includes('js') || skillName.toLowerCase().includes('javascript')) {
        iconClass = 'fab fa-js';
      } else if (skillName.toLowerCase().includes('html')) {
        iconClass = 'fab fa-html5';
      } else if (skillName.toLowerCase().includes('css')) {
        iconClass = 'fab fa-css3-alt';
      } else if (skillName.toLowerCase().includes('node')) {
        iconClass = 'fab fa-node-js';
      } else if (skillName.toLowerCase().includes('react')) {
        iconClass = 'fab fa-react';
      } else if (skillName.toLowerCase().includes('angular')) {
        iconClass = 'fab fa-angular';
      } else if (skillName.toLowerCase().includes('aws')) {
        iconClass = 'fab fa-aws';
      } else if (skillName.toLowerCase().includes('docker')) {
        iconClass = 'fab fa-docker';
      } else if (skillName.toLowerCase().includes('git')) {
        iconClass = 'fab fa-git-alt';
      }
      
      fallbackIcon.className = iconClass;
      this.parentElement.replaceChild(fallbackIcon, this);
    });
  });
});
