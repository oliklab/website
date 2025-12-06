document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Kinetic Typography (Hero Section) ---
  const words = '';
  const textElement = document.getElementById('kinetic-text');
  let wordIndex = 0;

  const cycleText = () => {
    // Fade out
    textElement.style.opacity = '0';
    textElement.style.transform = 'translateY(10px)';
    textElement.style.transition = 'all 0.4s ease';

    setTimeout(() => {
      // Change word
      wordIndex = (wordIndex + 1) % words.length;
      textElement.textContent = words[wordIndex];

      // Fade in
      textElement.style.opacity = '1';
      textElement.style.transform = 'translateY(0)';
    }, 400);
  };

  setInterval(cycleText, 2500);

  // --- 2. Scroll Reveal Animation (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: Stop observing once visible to prevent re-triggering
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });

  // --- 3. Header Scroll Effect ---
  const header = document.querySelector('.glass-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
      header.style.background = 'rgba(246, 248, 250, 0.95)';
    } else {
      header.style.padding = '20px 0';
      header.style.background = 'rgba(246, 248, 250, 0.85)';
    }
  });

  // --- 4. Work Slider Logic ---
  const slider = document.getElementById('projectSlider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 340, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -340, behavior: 'smooth' });
  });

  // --- 5. Contact Form Handler (Visual only) ---
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Sent!';
    btn.style.backgroundColor = '#10B981'; // Success Green

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.backgroundColor = '';
      form.reset();
    }, 3000);
  });
});