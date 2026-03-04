# Mangalam Landing Page - Documentation

This document provides a technical overview and maintenance guide for the Mangalam Landing Page project.

## Project Overview
The project involved a complete rebranding and visual overhaul of a landing page for HDPE Pipes & Fittings. Key focus and implementation areas include:
- **Branding**: Full transition from "Vectus" to "Mangalam".
- **Navigation**: Customized Sticky Navbar with a primary focus on ease of contact.
- **Hero Section**: Premium product showcase with interactive zoom and a brand trust banner.
- **Footer**: A detailed, 4-column custom footer implemented as per design specifications.

## Technical Stack
- **Structure**: Vanilla HTML5 (Semantic tags).
- **Styling**: Vanilla CSS3 (Custom Variables/Tokens, Fluid Layouts).
- **Interaction**: Vanilla JavaScript (ES6+).
- **Icons**: Font Awesome 6.4.0.
- **Typography**: Google Fonts (Urbanist for Headings, Inter for Body).

## Key Features

### 1. Interactive Hero Carousel
- Uses JS to handle thumbnail switching and navigation.
- Includes a **MouseMove Zoom** feature on the main product image for a premium "e-commerce" feel.

### 2. Sticky Headers
- **Main Navbar**: Becomes sticky with a shadow effect after scrolling past the hero section (700px threshold).
- **Sub-Nav**: Remains sticky below the main navbar for quick access to internal sections (Features, Specs, etc.).

### 3. Responsive Design
- Fully optimized for Mobile (up to 768px), Tablet (up to 1200px), and Desktop.
- Navigation links and grid layouts adjust automatically for smaller screens.

## File Structure & Documentation
The codebase is heavily documented using a standardized block-comment format for ease of maintenance:

- `index.html`: Contains the page structure, from Branding Metadata to the Site Footer.
- `styles.css`: Defined using CSS Variables for colors and spacing. Organized by section:
  - `Variables` -> `Reset` -> `Layout` -> `Section-specific styles` -> `Responsive Media Queries`.
- `script.js`: Handles DOM event listeners and UI logic (Carousel, FAQ, Form, Sticky Header).

## Maintenance Guide

### Updating Images
- Replace files in the `/assets/images/` directory.
- Update `index.html` `src` attributes or `script.js` image mappings if filenames change.

### Changing Branding Colors
- Modify the CSS Variables in `:root` inside `styles.css`:
  - `--primary-blue`: Main brand identity color.
  - `--secondary-blue`: Active elements and highlight color.

### Editing Links
- Navbar and Footer links are currently using `#` placeholders. Update these with absolute or relative URLs as per your sitemap.

---
*Handover completed on March 4, 2026*
