# AGENTS.md - 3DXENON Website Development Guide

## Project Overview
3DXENON is a pure vanilla HTML/CSS/JS static website showcasing 3D visualization and digital twin services. No build tools or frameworks are used. Content is served directly.

## Build, Lint, and Test Commands

**No build system exists** - This is a static site served directly.

### Development
- **Run locally**: Use any static file server (e.g., `python3 -m http.server 8000`, `npx serve`, or VS Code Live Server extension)
- **No package.json**: Project has no npm dependencies or build scripts

### Testing
- **No test framework**: Manual browser testing only
- **Test single feature**: Open the relevant HTML file directly in a browser (e.g., open `card-details.html?id=project-1` to test project details)

### Linting
- **No configured linter**: Follow the patterns documented below for consistency

## Code Style Guidelines

### File Naming
- **HTML/CSS files**: kebab-case (e.g., `card-details.html`, `contact.css`)
- **JavaScript files**: kebab-case in `script/` directory (e.g., `script.js`, `card-details.js`)
- **Assets**: `res/` for videos and project images, `images/logos/` for client logos

### HTML Conventions
- **Semantic structure**: Use `<header>`, `<nav>`, `<section>`, `<footer>` tags
- **Language attribute**: `<html lang="en">` or `<html lang="ar">` for Arabic pages
- **Meta tags**: Always include charset and viewport: `<meta charset="utf-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **External assets**: Link Google Fonts and Font Awesome in `<head>`:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  ```
- **Scripts**: Use `defer` attribute for non-critical scripts: `<script src="script/script.js" defer></script>`
- **Data attributes**: Use `data-*-animate` pattern for scroll-triggered animations (e.g., `data-services-animate`, `data-work-animate`)
- **Comments**: Use role-based prefix at file start and block starts:
  ```html
  <!-- Role: Header containing navigation links -->
  ```

### CSS Conventions
- **Selector naming**: kebab-case (e.g., `.hero-section`, `.service-card`, `.work-grid`)
- **ID naming**: camelCase (e.g., `videoFrame`, `heroInitial`) or kebab-case (`video-container`)
- **Reset**: Always start with `* { box-sizing: border-box; margin: 0; padding: 0; }`
- **Colors**: Use literal hex/rgba values, no CSS custom properties yet. Primary accent: `#04e3b2` (teal), dark backgrounds: `#001826`, `#002c40`, `#001a28`
- **Typography**: Roboto font family stack: `font-family: "Roboto", system-ui, -apple-system, "Segoe UI", Arial;`
- **Layout**: Combine Flexbox and CSS Grid. Grid for card layouts, Flexbox for navigation/headers
- **Animations**: Use `@keyframes` for custom animations and `transition` for hover effects
- **Responsiveness**: Mobile-first approach with media queries at breakpoints: 1200px, 1024px, 768px, 480px, 360px
- **Comments**: Role-based prefix:
  ```css
  /* Role: Header layout — fixed top navigation with backdrop blur */
  ```

### JavaScript Conventions

#### Naming
- **Variables/Functions**: camelCase (e.g., `handleFirstScroll`, `videoContainer`, `hasScrolledOnce`)
- **Constants**: `const` for unchanging references, `let` for mutable state
- **DOM queries**: Use `getElementById` for IDs, `querySelectorAll` for class-based queries

#### Imports/Includes
- **No ES modules**: Use traditional `<script>` tags with `defer`
- **Modularization**: Complex features isolated via `<iframe>` with separate HTML/CSS/JS bundles (e.g., `cash.html`, `season.html`)

#### Code Structure
```javascript
/* Role: File description and high-level responsibilities */

// Role: Element references used across script
const container = document.getElementById('videoContainer');

// Role: State variables for tracking
let isTransitioning = false;

// Role: Main handler function
function handleFirstScroll() {
  if (hasScrolledOnce) return;
  // ...implementation
}

// Role: Event listener attachment
window.addEventListener('wheel', handleFirstScroll, { passive: true });
```

#### Error Handling
- **Form submissions**: Use `try...catch` with `alert()` fallbacks
- **Video autoplay**: Handle play failures with `.catch()`:
  ```javascript
  video.play().catch(err => console.log('Autoplay prevented:', err));
  ```
- **Routing validation**: Check for valid data before proceeding (e.g., in `card-details.js`, redirect to `index.html` if project ID invalid)

#### Animation Patterns
- **Scroll triggers**: Use `IntersectionObserver` for viewport-based animations:
  ```javascript
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3, rootMargin: '0px' });
  ```
- **Observer cleanup**: Always call `unobserve()` after adding animation class to prevent re-triggering

#### Data Management
- **Project database**: Stored as JavaScript object `projectsData` in `script/card-details.js`
- **URL parameters**: Parse with `new URLSearchParams(window.location.search).get('id')`
- **Dynamic content**: Generate HTML via template literals and `.innerHTML` assignment

#### Iframe Communication
- **Parent to iframe**: Use `postMessage` with wildcard origin (replace `'*'` with actual origin for production):
  ```javascript
  iframe.contentWindow.postMessage({ action: 'scrollNext' }, '*');
  ```
- **Security warning**: Validate `ev.origin` before processing messages from iframe

## Asset Organization
- **`res/`**: High-bandwidth assets - MP4 videos (e.g., `autumn.mp4`, `spring.mp4`), project images (e.g., `work1.png`, `service1.png`)
- **`images/logos/`**: Client logos for infinite slider
- **`css/`**: Stylesheets - one per page type (e.g., `style.css`, `contact.css`, `season.css`)
- **`script/`**: JavaScript files - one per page (e.g., `script.js`, `contact.js`, `cashh.js`)

## Adding New Content

### Adding a New Project
1. Open `script/card-details.js`
2. Add new entry to `projectsData` object:
   ```javascript
   'project-7': {
     id: 'project-7',
     category: 'Your Category',
     title: 'Project Title',
     image: 'res/your-image.png',
     overview: 'Brief description...',
     challenge: 'Challenges faced...',
     solution: 'Solution implemented...',
     results: 'Outcome...',
     technologies: ['Tool1', 'Tool2'],
     services: ['Service1', 'Service2'],
     gallery: ['res/img1.png', 'res/img2.png'],
     videos: ['https://youtube.com/embed/xxx']
   }
   ```
3. Add corresponding card in `index.html` within `.work-grid`

### Adding a New Page
1. Create HTML file (e.g., `news.html`)
2. Create corresponding CSS in `css/` (e.g., `news.css`)
3. Create corresponding JS in `script/` (e.g., `news.js`)
4. Link CSS in `<head>`: `<link rel="stylesheet" href="css/news.css">`
5. Link JS before `</body>`: `<script src="script/news.js" defer></script>`

## Browser Support
- Modern browsers only (Chrome, Firefox, Safari, Edge)
- Uses ES6+ features (arrow functions, `const`/`let`, `IntersectionObserver`)
- Video autoplay requires browser permission policies

## Key Patterns to Follow
1. **Comment style**: Always include "Role:" prefix describing what the code does
2. **Animation delays**: Use staggered delays with `nth-child()` or index-based timeouts
3. **Mobile responsiveness**: Test at 768px breakpoint as minimum target
4. **Performance**: Use passive event listeners where possible (`{ passive: true }`)
5. **Accessibility**: Include `aria-label` on icon-only links, use semantic HTML
