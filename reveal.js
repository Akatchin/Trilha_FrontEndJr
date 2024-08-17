const displayMessage = document.querySelector('.welcome-message');

window.scroll = ScrollReveal({reset: true});

scroll.reveal('.profile-animation', {
    duration: 2000,
    delay: 500,
    rotate: {
        x: 0,
        y: 500,
        z: 0 
    }
});

scroll.reveal('.about-reveal', {
    duration: 2000,
    distance: '50px'
});

scroll.reveal('.presentation-text-reveal', {
    duration: 2000,
    distance: '90px',
    origin: 'left'
});

scroll.reveal('.html-icon', {
    duration: 2000,
    distance: '60px',
});

scroll.reveal('.css-icon', {
    duration: 2000,
    distance: '60px',
    delay: 100
});

scroll.reveal('.react-icon', {
    duration: 2000,
    distance: '60px',
    delay: 200
});

scroll.reveal('.javascript-icon', {
    duration: 2000,
    distance: '60px',
    delay: 300
});

scroll.reveal('.typescript-icon', {
    duration: 2000,
    distance: '60px',
    delay: 400
});

scroll.reveal('.php-icon', {
    duration: 2000,
    distance: '60px',
    delay: 500
});

scroll.reveal('.nodejs-icon', {
    duration: 2000,
    distance: '60px',
    delay: 600
});

scroll.reveal('.mongodb-icon', {
    duration: 2000,
    distance: '60px',
    delay: 700
});

