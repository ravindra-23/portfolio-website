// Selectors

const navBar = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLink = document.querySelectorAll('.nav__link')


// Eventlisteners

navToggle.addEventListener('click', () => {
    const visibility = navBar.getAttribute('data-visible');

    if(visibility === 'false') {
        navBar.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        navBar.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navBar.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    })
})

// Scroll Reveal Animations

const sra = ScrollReveal({
    origin: 'top',
    reset: true,
    distance: '80px',
    duration: 2500,
})

// Scroll Home
sra.reveal('.home-title', {})
sra.reveal('.button', { delay: 200 })
sra.reveal('.social-icon', { interval: 200 })

// Scroll About
sra.reveal('.section-title', {})
sra.reveal('.about-text',  { origin: 'left', delay: 400 })
sra.reveal('.about-image',  { origin: 'right', delay: 400 })

// Scroll Skills
sra.reveal('.skills-image', { origin: 'left', delay: 400 })
sra.reveal('.skills-data', { origin: 'right', interval: 200 })

// Sroll Work
sra.reveal('.card', { delay: 200 })

// Scroll Contact
sra.reveal('.contact-container', { delay: 400 })