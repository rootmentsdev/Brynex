# Brynex Frontend

Modern React/Vite single-page application for Brynex Apparels. The UI highlights Brynex brands, technology, culture, and contact touchpoints with a consistent design system across desktop and mobile breakpoints.

---

## Tech Stack

- **React 18** with **Vite** for fast dev/build cycles  
- **React Router** for client-side navigation  
- **React Bootstrap** and custom CSS for layout and components  
- **React Icons** for consistent iconography  
- **Google Apps Script** backend (see root `GOOGLE_SHEETS_SETUP.md`) powering contact form submissions

---

## Getting Started

```bash
# install dependencies
npm install

# start local dev server (http://localhost:5173 by default)
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

Requirements: Node.js 18+ and npm 9+. The project is self-contained; no additional environment variables are needed for local development.

---

## Project Structure

```
frontend/
├── src/
│   ├── assets/                # Brand imagery and hero graphics
│   ├── components/
│   │   ├── Footer.jsx         # Global footer
│   │   ├── Header.jsx         # Top navigation + mobile drawer
│   │   ├── PageTransition.jsx # Fade animation between routes
│   │   └── ScrollToTop.jsx    # Scroll reset on route change
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── BrandPage.jsx
│   │   ├── TechnologyPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx                # Route definitions
│   ├── App.css                # Base layout helpers
│   ├── index.css              # Global design tokens & overrides
│   └── main.jsx               # Render entry point
├── package.json               # Scripts & dependencies
├── vercel.json                # Deployment settings (optional)
└── vite.config.js             # Vite configuration
```

---

## Page Reference

| Page | Description |
| --- | --- |
| `HomePage.jsx` | Landing experience with hero, metrics, capability highlights, testimonials, and CTA. |
| `AboutPage.jsx` | Brand story, vision, pillars, leadership, and values. |
| `BrandPage.jsx` | Individual brand spotlights with imagery, copy, and button links. |
| `TechnologyPage.jsx` | Technology stack, platforms, and innovation narrative. |
| `CareersPage.jsx` | Culture, open roles, and candidate call-to-action. |
| `ContactPage.jsx` | Contact information and lead capture form. Submits to Google Sheets through Apps Script. |

Each page uses consistent typography, spacing, and responsive behavior defined in `index.css`.

---

## Styling Guidelines

- Global tokens (`:root` CSS custom properties) and utility classes are declared in `src/index.css`.  
- React Bootstrap components are heavily restyled; prefer custom class names rather than inline styles when scaling new sections.  
- Headline sizes on Home, About, and Brand pages are synchronized through utility classes (`home-hero-title`, `about-hero-title`, etc.). Adjust once in `index.css` to affect all breakpoints.  
- Animations (hover states, fade-ins) are defined via CSS transitions to keep React code lean.

---

## Components

- **Header**: Handles responsive navigation and mobile menu toggle. Update nav links here when adding pages.  
- **Footer**: Shared footer with quick links and social icons.  
- **PageTransition**: Wraps routes to fade between pages.  
- **ScrollToTop**: Restores the scroll position to the top during navigation.

---

## Contact Form Workflow

- Located in `ContactPage.jsx`.  
- Client-side validation ensures:
  - Required fields (`fullName`, `email`, `subject`, `message`).  
  - Email must use **gmail.com**, **outlook.com**, or **yahoo.com** domains (change the regex `allowedEmailPattern` to support more).  
- Invalid emails highlight the field, display an inline error message, and scroll/focus the user on the field so the form cannot submit until corrected.  
- On success, the form sends a POST request to the Google Apps Script endpoint defined in `GOOGLE_SCRIPT_URL`.  
- Modify the endpoint or submission strategy (e.g., replace with API) by updating `handleSubmit`.

For backend setup instructions, reference the root-level `GOOGLE_SHEETS_SETUP.md`.

---

## Making Page Updates

1. Duplicate the established structure: headings wrapped with descriptive spans for mobile control, copy enclosed in `<p>` tags, and layout constructed using `Row`/`Col`.  
2. Update imagery via `src/assets/` and import with descriptive names.  
3. Add or adjust metrics/feature cards by editing the mapped arrays inside the relevant page component.  
4. Maintain responsiveness by checking the design at widths 320px, 768px, 1024px, and 1440px.

---

## Testing & QA Tips

- Run `npm run dev` and inspect pages on Chrome/Edge responsive mode and real devices.  
- Validate the contact form using both valid (`user@gmail.com`) and invalid (`user@gamil.co`) emails to confirm UX behavior.  
- If layout spacing appears off, check `index.css` for the corresponding breakpoint overrides.

---

## Deployment Notes

- Vercel configuration is included (`vercel.json`). Update `outputDirectory` if the build path changes.  
- Build artifacts live in `dist/` after `npm run build`. Deploy the `dist` folder to any static hosting solution (Vercel, Netlify, S3, etc.).

---

## Need to Customize Further?

- **Allow more email domains**: edit `allowedEmailPattern` at the top of `ContactPage.jsx`.  
- **Change call-to-action routes**: update the `Link` components inside each page.  
- **Introduce new sections**: create a dedicated functional component in `src/components/` and import it into the relevant page for easier reuse.

For questions or follow-up enhancements, document changes inside this README to keep the team aligned. Happy building! 🎉
