import { CONFIG } from './config.js';

const typingText = document.querySelector('.typing-text');
const { phrases, typingSpeed } = CONFIG;

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentSpeed = typingSpeed.type;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        currentSpeed = typingSpeed.delete;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        currentSpeed = typingSpeed.type;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        currentSpeed = typingSpeed.pauseAfterPhrase;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        currentSpeed = typingSpeed.pauseBeforeNewPhrase;
    }

    setTimeout(typeEffect, currentSpeed);
}

export function initTypingEffect() {
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }
}
