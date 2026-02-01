import { CONFIG } from './config.js';

function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = CONFIG.animationDuration;
    const increment = target / (duration / 16);
    let current = 0;

    const updateNumber = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    };

    updateNumber();
}

export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: CONFIG.observerThreshold
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('skill-category')) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        setTimeout(() => {
                            bar.style.width = `${progress}%`;
                        }, 200);
                    });
                }

                if (entry.target.classList.contains('stat-card')) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber && !statNumber.classList.contains('animated')) {
                        animateNumber(statNumber);
                        statNumber.classList.add('animated');
                    }
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-category, .stat-card, .project-card, .about-text, .contact-info, .contact-form').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0';
    });
}
