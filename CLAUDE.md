# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

3DXENON is a pure vanilla HTML/CSS/JavaScript static website for a 3D visualization and digital twin services company. **No build tools, frameworks, or package managers are used.** The site is served directly as static files.

**Key architectural patterns:**
- Multi-page static site with shared navigation
- Iframe-based isolation for complex interactive features (cash.html, season.html)
- Client-side translation system supporting English and Estonian
- IntersectionObserver-driven scroll animations throughout
- Project data stored as JavaScript objects for dynamic rendering

## Development Commands

**No build system exists** - this is a static site served directly.

### Running locally
```bash
# Using Python (recommended)
python3 -m http.server 8000

# Using Node.js serve
npx serve

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### Testing
- Manual browser testing only
- Open HTML files directly: `file:///path/to/index.html` or via local server
- Test project details: `card-details.html?id=project-1`

### Code validation
- No linter configured
- Manual review against patterns documented below

## File Structure

```
/
├── index.html           # Main landing page
├── contact.html         # Contact form page
├── card-details.html    # Dynamic project details (query param: ?id=project-N)
├── cash.html            # Embedded iframe: stacked video hero
├── season.html          # Embedded iframe: seasonal demo viewer
├── video.html           # Legacy video page
├── css/
│   ├── style.css        # Main stylesheet (index.html)
│   ├── contact.css      # Contact page styles
│   ├── card-details.css # Project details styles
│   ├── cash.css         # Video hero styles
│   ├── season.css       # Season viewer styles
│   └── translations.css # Language toggle button styles
├── script/
│   ├── script.js        # Main page: scroll handlers, animations
│   ├── contact.js       # Contact form submission, animations
│   ├── card-details.js  # Project data DB + dynamic rendering
│   ├── cashh.js         # Video hero stack navigation
│   ├── season.js        # Season selector + video player
│   ├── translations.js  # i18n system (en/et) + language toggle
│   └── check_translations.js  # Utility to verify translation coverage
├── res/                 # High-bandwidth assets (MP4s, project images)
├── images/logos/        # Client logo images for infinite slider
└── AGENTS.md            # Detailed development guide (source for this file)
```

## Core Technical Architecture

### Translation System (i18n)

The site uses a custom client-side translation system in `script/translations.js`:

- **Languages**: English (`en`) and Estonian (`et`)
- **Storage**: `window.translations` object with dot-notation keys (e.g., `'hero.title.1'`)
- **Persistence**: User preference saved to `localStorage.getItem('lang')`
- **Markup**: Elements marked with `data-i18n="key.name"` attribute are auto-translated
- **Language toggle**: Button dynamically injected into `<nav>` by translations.js

Adding new translations:
1. Add entries to both `'en'` and `'et'` objects in `script/translations.js`
2. Mark HTML elements with `data-i18n="your.key"`
3. Run `node script/check_translations.js` to verify coverage (lists missing keys)

### Project Database & Dynamic Routing

Project data is stored in `script/card-details.js` as the `projectsData` object:

```javascript
const projectsData = {
  'project-1': {
    id, category, title, image, overview, challenge, solution, results,
    technologies: [], services: [], gallery: [], videos: []
  }
}
```

Routing to project details:
- Links: `card-details.html?id=project-1`
- JS parses query: `new URLSearchParams(window.location.search).get('id')`
- Invalid IDs redirect to `index.html`
- Content dynamically rendered via `.innerHTML` template literals

### Iframe Communication Pattern

Parent ↔ child iframe messaging via `postMessage`:

**Parent to iframe** (`script/script.js`):
```javascript
iframe.contentWindow.postMessage({ action: 'scrollNext' }, '*');
```

**Child (cash.html) receives** via `window.addEventListener('message', ...)`

**Security note**: Production should replace `'*'` wildcard with actual origin.

### Scroll Animation System

Site-wide pattern for viewport-triggered animations:

1. HTML: Add `data-*-animate` attribute to elements
   - Services: `data-services-animate`
   - Work cards: `data-work-animate`
   - Clients: `data-clients-animate`
   - Contact: `data-contact-animate`

2. JavaScript: Initialize observer per page (e.g., `initServicesAnimation()` in script.js)

3. CSS: Define `.animate` class with transition/keyframe animations

Example pattern:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Prevent re-trigger
    }
  });
}, { threshold: 0.3 });
```

### Hero Video Interaction Flow

Main page (`index.html`) embeds `cash.html` via iframe:

1. Initial state: Hero title visible, "SCROLL DOWN TO CONTINUE" prompt
2. User scrolls/clicks/taps/keys → `handleFirstScroll()` fires
3. Hero overlay fades out (`heroInitial.classList.add('hide')`)
4. Video container reveals after 500ms delay
5. Keyboard events (ArrowUp/Down) forwarded to iframe via postMessage

## Code Style Conventions

### HTML
- **Semantic tags**: `<header>`, `<nav>`, `<section>`, `<footer>`
- **File naming**: kebab-case (`card-details.html`)
- **Lang attribute**: `lang="en"` or `lang="et"` (currently `lang="ar"` in index.html - may need correction)
- **Meta tags**: Always include charset and viewport
- **External fonts**: Google Fonts (Roboto) + Font Awesome 6.5.0
- **Comments**: Role-based prefix style: `<!-- Role: Description -->`

### CSS
- **Naming**: kebab-case classes (`.hero-section`, `.service-card`)
- **IDs**: Mixed camelCase/kebab (`videoFrame`, `video-container`)
- **Reset**: `* { box-sizing: border-box; margin: 0; padding: 0; }`
- **Colors**: Literal values (no CSS vars yet). Accent: `#04e3b2` (teal), darks: `#001826`, `#002c40`
- **Typography**: Roboto stack: `"Roboto", system-ui, -apple-system, "Segoe UI", Arial`
- **Layout**: CSS Grid for cards, Flexbox for nav/headers
- **Breakpoints**: 1200px, 1024px, 768px, 480px, 360px
- **Comments**: Role-based: `/* Role: Description */`

### JavaScript
- **Naming**: camelCase (`handleFirstScroll`, `videoContainer`)
- **Variables**: `const` for immutable, `let` for mutable
- **No ES modules**: Traditional `<script defer>` tags
- **DOM queries**: `getElementById` for IDs, `querySelectorAll` for classes
- **Error handling**: `try...catch` with fallbacks (e.g., form submissions)
- **Comments**: Role-based prefix (see examples throughout codebase)

### Franco-Arab Comment Style

The codebase uses a distinctive comment style with both English and Franco-Arab annotations:
```javascript
/* Role: Description — English explanation */
/* [BLOCK]    : Franco-Arab annotation */
```

## Adding New Content

### Adding a new project
1. Open `script/card-details.js`, add to `projectsData` object
2. Add project card HTML in `index.html` within `.work-grid`
3. Add project images to `res/` directory
4. Add corresponding translations to `script/translations.js` (both `en` and `et`)

### Adding a new page
1. Create HTML file (e.g., `news.html`)
2. Create CSS in `css/` (e.g., `news.css`)
3. Create JS in `script/` (e.g., `news.js`)
4. Link CSS in `<head>`, JS before `</body>` with `defer`
5. Add translations to `script/translations.js`
6. Add navigation link in existing pages' `<nav>` sections

## Browser & Environment

- **Target browsers**: Chrome, Firefox, Safari, Edge (modern only)
- **ES6+ features**: Arrow functions, const/let, IntersectionObserver, template literals
- **Video policies**: Autoplay subject to browser permission policies
- **No server-side**: All form submissions currently mock async (no backend integration)

## Key Implementation Details

1. **Staggered animations**: Use index-based timeouts in observers (e.g., work cards: `setTimeout(() => ..., index * 150)`)
2. **Passive listeners**: Use `{ passive: true }` for scroll/touch events to improve performance
3. **Form handling**: Mock 1.5s delay, no actual backend - logs to console
4. **Logo slider**: Duplicated logo sets create seamless infinite scroll; pauses on hover
5. **Footer year**: Auto-updated via JS (`document.getElementById('year')`)
6. **Iframe isolation**: Complex features (cash/season pages) run in separate HTML contexts to avoid style/script conflicts
