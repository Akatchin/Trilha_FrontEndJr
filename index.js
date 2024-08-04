window.scroll = ScrollReveal({reset: true});
console.log('funcionando');

scroll.reveal('.profile', {
    duration: 2000,
    delay: 500,
    rotate: {
        x: 0,
        y: 500,
        z: 0 
    }
})

scroll.reveal('.about-reveal', {
    duration: 2000,
    distance: '50px'
})

scroll.reveal('.presentation-text-reveal', {
    duration: 2000,
    distance: '90px',
    origin: 'left'
}) 