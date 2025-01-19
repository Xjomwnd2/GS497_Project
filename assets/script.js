// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  const contactForm = document.querySelector('#contact form');
  contactForm.addEventListener('submit', (e) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all the fields.');
    }
  });
  