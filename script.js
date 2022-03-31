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