/**
 * MANGALAM LANDING PAGE - JAVASCRIPT
 * Handles interactive elements: Hero Carousel, FAQ Accordion, Manufacturing Tabs, and Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // HERO CAROUSEL
  // ==========================================================================
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumb-wrapper');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentImageIndex = 0;

  // Extract images from thumbnails to keep single source of truth for the carousel
  const imageSources = Array.from(thumbnails).map(t => t.querySelector('img').src);

  function updateMainImage(index) {
    // Loop back functionality for carousel bounds
    if (index < 0) index = imageSources.length - 1;
    if (index >= imageSources.length) index = 0;

    currentImageIndex = index;

    // Transition effect for image swap
    mainImage.style.opacity = '0.5';
    setTimeout(() => {
      mainImage.src = imageSources[currentImageIndex];
      mainImage.style.opacity = '1';
    }, 150);

    // Sync thumbnail clear/active states
    thumbnails.forEach((thumb, i) => {
      if (i === currentImageIndex) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  // Bind click events to thumbnails
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateMainImage(index);
    });
  });

  // Bind click events to next/prev navigation arrows
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => updateMainImage(currentImageIndex - 1));
    nextBtn.addEventListener('click', () => updateMainImage(currentImageIndex + 1));
  }


  // ==========================================================================
  // FAQ ACCORDION
  // ==========================================================================
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    const body = card.querySelector('.faq-body');
    const icon = card.querySelector('.faq-icon');

    header.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Auto-close other accordion items for cleaner UX
      faqCards.forEach(c => {
        c.classList.remove('active');
        c.querySelector('.faq-body').style.display = 'none';
        c.querySelector('.faq-icon').classList.remove('fa-minus');
        c.querySelector('.faq-icon').classList.add('fa-plus');
      });

      // Toggle state of clicked item
      if (!isActive) {
        card.classList.add('active');
        body.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    });
  });


  // ==========================================================================
  // MANUFACTURING PROCESS TABS
  // ==========================================================================
  const processTabs = document.querySelectorAll('.process-tab');
  const processImgDisplay = document.getElementById('process-img-display');

  // Mapping of tab targets to display image assets
  const processImages = {
    step1: 'assets/images/image2.jpg',
    step2: 'assets/images/fishnet.png',
    step3: 'assets/images/image2.jpg'
  };

  processTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Manage active tab state
      processTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update the side process image with a fade transition
      const target = tab.getAttribute('data-target');
      if (processImages[target] && processImgDisplay) {
        processImgDisplay.style.opacity = '0.5';
        setTimeout(() => {
          processImgDisplay.src = processImages[target];
          processImgDisplay.style.opacity = '1';
        }, 200);
      }
    });
  });


  // ==========================================================================
  // STICKY SUB-NAV ACTIVE STATE
  // ==========================================================================
  const subNavLinks = document.querySelectorAll('.sub-nav a');

  // smooth scroll to sections with custom offset for sticky header height
  subNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 150;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection logic for sub-nav highlighting
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 200;

    subNavLinks.forEach(link => {
      const sectionId = link.getAttribute('href');
      // Fix: check if sectionId is valid before querying
      if (sectionId && sectionId.startsWith('#')) {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            subNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  });


  // ==========================================================================
  // STICKY HEADER
  // ==========================================================================
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;
  const scrollThreshold = 700; // Rough "first fold" height

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if we are past the first fold
    if (scrollTop > scrollThreshold) {
      // Past threshold - Show sticky header
      navbar.classList.add('sticky-down');
    } else {
      // Above threshold - Hide sticky behavior
      navbar.classList.remove('sticky-down');
    }
  }, { passive: true });


  // ==========================================================================
  // IMAGE CAROUSEL ZOOM
  // ==========================================================================
  const imageWrapper = document.querySelector('.main-image-wrapper');
  if (imageWrapper && mainImage) {
    imageWrapper.addEventListener('mousemove', (e) => {
      const rect = imageWrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      mainImage.style.transformOrigin = `${x}% ${y}%`;
    });

    imageWrapper.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center';
    });
  }


  // ==========================================================================
  // FORM SUBMISSION
  // ==========================================================================
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = quoteForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;

      // Provide immediate UX feedback for processing
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      // Simulate network latency for API call
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Request Sent Successfully';
        btn.style.backgroundColor = '#10B981';

        // Auto-reset form state after delay
        setTimeout(() => {
          quoteForm.reset();
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});