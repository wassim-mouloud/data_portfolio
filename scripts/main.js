import { initMobileMenu, initNavbarScroll, initActiveLinkHighlight, initSmoothScroll } from './navigation.js';
import { initTypingEffect } from './typing.js';
import { initScrollAnimations } from './animations.js';
import { initContactForm } from './forms.js';
import { initProjectCardHover, initParallax } from './effects.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    initMobileMenu();
    initNavbarScroll();
    initActiveLinkHighlight();
    initSmoothScroll();

    initTypingEffect();
    initScrollAnimations();
    initProjectCardHover();
    initParallax();

    initContactForm();
});

console.log(`
%c Wassim Mouloud - Data Science Portfolio
%c Thanks for checking out my code!
%c Let's connect: your.email@example.com

`,
'color: #6366f1; font-size: 20px; font-weight: bold;',
'color: #94a3b8; font-size: 14px;',
'color: #10b981; font-size: 12px;'
);
