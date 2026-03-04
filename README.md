# Mangalam Landing Page - Technical Documentation

This guide provides a comprehensive technical overview, architectural breakdown, and maintenance instructions for the Mangalam Landing Page. 

---

## 1. Project Overview
The landing page for **Mangalam** is a high-performance, single-page website focused on showcasing premium HDPE Pipes & Fittings. Developed with a pixel-perfect approach, it ensures brand consistency across all device sizes while maintaining high performance.

### Key Branding Pillars
- **Authority**: Highlighting certifications (ISO, BIS, CE) and trusted global partnerships.
- **Reliability**: Emphasizing 50+ year service life and chemical resistance.
- **Precision**: Professional technical specs and quality-focused manufacturing process.

---

## 2. Technical Stack
- **HTML5**: Semantic structure for SEO and Accessibility.
- **CSS3**: Variables-based (Tokens) design system with hybrid Grid/Flexbox layouts.
- **JavaScript**: Vanilla ES6+ for all interactive components.
- **Icons & Fonts**: Font Awesome 6.4 | Google Fonts (Urbanist & Inter).

---

## 3. Component Deep Dive

### 3.1. Navigation Header
- **Layout**: 3-column flex layout (Logo | Navigation | CTA).
- **Behavior**: Smooth transitions when the `.sticky-down` class is toggled via scroll events.

### 3.2. Interactive Product Carousel
- **Zoom Capabilities**: Precise cursor-tracking zoom achieved by calculating local bounding dimensions in JS and updating `transform-origin` dynamically.
- **Lazy Swap**: Image transitions utilize a 150ms opacity fade to ensure smooth visual updates.

### 3.3. Custom Footer (Figma-Matched)
- **Architecture**: A complex **CSS Grid** structure with named areas for better responsive control.
- **Responsive Transitions**: Shifts from 4-columns (Desktop) to 2-columns (Tablet) and finally 1-column (Mobile).

---

## 4. Advanced UI/UX Patterns

### 4.1. Intelligent Navigation
- **Dual-Layer Sticky Headers**: 
  - Main Navigation appears after a 700px scroll threshold.
  - Sub-Navigation docks below the main header for internal section jumping.
- **Active State Tracking**: Links automatically highlight based on the user's scroll position.

### 4.2. Lead Generation System
- **Mock Form Integration**: Fully styled "Request a Quote" form with real-time UI feedback (spinners, success checks).

---

## 5. Maintenance & Customization

### 5.1. Design System (CSS Variables)
Modify global properties in `styles.css` under the `:root` pseudo-class:
```css
--primary-blue: #1C2B59;    /* Corporate Identity */
--secondary-blue: #2E50C0;  /* Call to Actions */
--radius-lg: 16px;          /* Global corner rounding */
```

### 5.2. Updating Images & Media
- Store all assets in the `/assets/images/` directory.
- Update `index.html` `src` attributes or `script.js` image mappings if filenames change.

### 5.3. Scroll Logic
- To adjust the sticky header trigger, modify the `scrollThreshold` constant in `script.js`.

---

## 6. Local Development & Deployment
1. **Local Access**: Open `index.html` in any modern browser. No build steps required.
2. **Deployment**: Upload the root directory to any static hosting provider.

---
*Last Updated: March 5, 2026*
