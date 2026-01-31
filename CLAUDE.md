# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal data science portfolio website for Wassim Mouloud. A single-page application built with vanilla HTML, CSS, and JavaScript - no build system or package manager.

## Development

**To run locally:** Open `index.html` directly in a browser. No build step required.

**External dependencies (CDN-loaded):**
- Google Fonts (Inter, JetBrains Mono)
- FontAwesome 6.4.0
- Formspree for contact form submission

## Architecture

### File Structure
- `index.html` - Single HTML file with all page sections (Hero, About, Projects, Skills, Contact)
- `styles.css` - CSS with design system variables and responsive styling
- `script.js` - JavaScript modules for interactivity

### CSS Design System
All theming uses CSS variables defined in `:root`:
- Colors: `--primary`, `--secondary`, `--accent` with `-light`/`-dark` variants
- Dark theme backgrounds: `--bg-primary` (#0f172a), `--bg-secondary`, `--bg-card`
- Gradients, shadows, spacing, and border-radius scales

### JavaScript Modules
The script is organized into functional sections:
1. **Navigation** - Mobile menu, scroll-based styling, active link highlighting
2. **Typing Effect** - Cycles through phrases in hero section
3. **Scroll Animations** - IntersectionObserver for fade-ins, skill bars, stat counters
4. **Contact Form** - Formspree integration with loading/success/error states
5. **Parallax** - Code window effect in hero (0.3x scroll rate)

### Key Implementation Details
- Smooth scroll offset: 80px (accounts for fixed navbar)
- Stat counter animation: 2 seconds duration using requestAnimationFrame
- Typing speeds: 100ms type, 50ms delete, 2000ms pause between phrases
- Form endpoint: `https://formspree.io/f/xkobjaoj`
