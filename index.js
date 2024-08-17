const displayMessage = document.querySelector('.welcome-message');


function textAnimation (message, interval) {
    message.split('').forEach((letter, index) => {
        setTimeout(() => {
            displayMessage.innerHTML+=letter;
        }, index * interval)
    })
};
