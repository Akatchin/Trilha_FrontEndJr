const nodes = Array.from(document.querySelector(".js-onscreen"));

const isOnScreen = (el) => {
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

function playAnimation(el) {
    if(isOnScreen(el)) el.style.animationPlayState = 'running';
}

const render = () => nodes.forEach(playAnimation);

// Exibe os elementso que já estão
// na tela antes do primeiro scroll

render();

window.addEventListener('scroll', render);