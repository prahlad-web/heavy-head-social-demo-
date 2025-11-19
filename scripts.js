document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      header.style.background = 'rgba(0, 0, 0, 0.8)';
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  nav.classList.toggle('open');
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
