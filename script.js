document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Fade-In Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated in
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements that should fade in
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // Trigger visible immediately for hero elements that are already in viewport
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-in-up');
        heroElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});
