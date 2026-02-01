import { CONFIG } from './config.js';

// Project card hover effects
export function initProjectCardHover() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Parallax effect for code window
export function initParallax() {
    const codeWindow = document.querySelector('.code-window');

    if (!codeWindow) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * CONFIG.parallaxRate;

        if (scrolled < window.innerHeight) {
            codeWindow.style.transform = `translateY(${rate}px)`;
        }
    });
}
