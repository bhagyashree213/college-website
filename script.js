/**
 * Dr. D. Y. Patil School of Science & Technology, Pune
 * Main Client-Side JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Contact Form Handling
  const contactForm = document.getElementById('collegeContactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        formFeedback.style.display = 'block';
        formFeedback.style.background = '#fef2f2';
        formFeedback.style.color = '#991b1b';
        formFeedback.style.borderColor = '#fecaca';
        formFeedback.textContent = 'Please fill out all required fields before submitting.';
        return;
      }

      // Simulate successful submission
      formFeedback.style.display = 'block';
      formFeedback.style.background = '#ecfdf5';
      formFeedback.style.color = '#065f46';
      formFeedback.style.borderColor = '#a7f3d0';
      formFeedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your inquiry has been received. Our admissions and counseling team will reach out to you via ${email} shortly.`;

      contactForm.reset();

      setTimeout(() => {
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    });
  }

  // 2. Active Navigation Link Sync
  const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  const navLinks = document.querySelectorAll('.main-menu a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().toLowerCase();

    // Check exact match or root home match
    if (
      linkPath === currentPath ||
      (currentPath === '' && linkPath === 'index.html') ||
      (currentPath === 'contact%20us.html' && linkPath === 'contact.html') ||
      (currentPath === 'contact us.html' && linkPath === 'contact.html')
    ) {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
