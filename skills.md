# BSides Kolkata Website - Technical Skills Documentation

## Project Overview

**BSides Kolkata** is a community-driven cybersecurity conference website built with **Next.js 14** (App Router), **React 18**, **Tailwind CSS**, and **GSAP** for animations. The website serves as the official platform for Eastern India's largest security conference, featuring speaker information, schedules, sponsorship details, volunteer registration, CFP (Call for Papers), CTF competition details, and more.

---

## Tech Stack

### Core Framework
- **Next.js 14.2.12** - React framework with App Router
- **React 18** - UI library
- **React DOM 18** - DOM renderer

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8** - CSS processing
- **Custom Fonts** - Protest Guerrilla (display) & Protest Light (body) via `next/font/local`

### Animations & Interactions
- **GSAP 3.12.5** - Professional-grade animation library
- **GSAP ScrollTrigger** - Scroll-based animation triggers
- **Custom CSS Animations** - Glitch text effects, hover transitions

### Analytics & Monitoring
- **@vercel/analytics 1.6.1** - Privacy-friendly analytics

### Icons & Assets
- **react-icons 5.3.0** - Icon library (FaXTwitter, FiInstagram, FaArrowLeft)
- **Next.js Image Optimization** - Automatic image optimization with `next/image`

### Development Tools
- **ESLint 8** - Code linting
- **eslint-config-next 14.2.12** - Next.js ESLint configuration

---

## Project Structure

```
BSidesKolkata.github.io/
├── public/
│   ├── overview.mp4
│   └── thumbnail.png
├── src/
│   ├── app/
│   │   ├── (root)/
│   │   │   ├── layout.js          # Root layout with Navbar, Footer, Analytics
│   │   │   └── page.js            # Home page - composes all landing sections
│   │   ├── cfp/
│   │   │   ├── layout.js          # CFP page layout
│   │   │   └── page.js            # Call for Papers page
│   │   ├── ctf/
│   │   │   ├── layout.js          # CTF page layout
│   │   │   └── page.js            # Capture The Flag page
│   │   ├── codeofconduct/
│   │   │   ├── layout.js          # Code of Conduct layout
│   │   │   └── page.js            # Code of Conduct page
│   │   ├── join-as-volunteer/
│   │   │   ├── layout.js          # Volunteer page layout
│   │   │   └── page.js            # Volunteer registration page
│   │   ├── sponser-us/
│   │   │   ├── layout.js          # Sponsor page layout
│   │   │   └── page.js            # Sponsorship benefits page
│   │   ├── village/
│   │   │   ├── layout.js          # Village page layout
│   │   │   └── page.js            # Hacking Village page
│   │   ├── favicon.ico
│   │   ├── fonts/
│   │   │   ├── ProtestGuerrilla-Regular.woff
│   │   │   └── ProtestLight.woff
│   │   └── globals.css            # Global styles + custom animations
│   ├── assets/
│   │   ├── hero-image.avif
│   │   ├── hero-image.png
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   ├── footer-bg.png
│   │   ├── paper plane.png
│   │   ├── vector.svg
│   │   ├── icons/
│   │   │   ├── Vector (1).svg
│   │   │   ├── Vector (2).svg      # LinkedIn icon
│   │   │   ├── Vector (3).svg      # Facebook icon
│   │   │   ├── Vector (4).svg
│   │   │   ├── call.svg
│   │   │   ├── location_on.svg
│   │   │   └── send.svg
│   │   ├── speakers/
│   │   │   ├── keynote/
│   │   │   │   ├── deepak.jpg
│   │   │   │   └── praween.jpg
│   │   │   └── tech/
│   │   │       ├── adhoksha.jpg
│   │   │       ├── aditya.jpg
│   │   │       ├── amit.jpg
│   │   │       ├── archan.jpg
│   │   │       ├── gaurav.jpg
│   │   │       ├── mounty.jpg
│   │   │       ├── ravi.jpg
│   │   │       ├── rishika.jpg
│   │   │       └── soumyadeep.jpg
│   │   ├── sponsers/
│   │   │   ├── dummy.png
│   │   │   └── iem.png
│   │   └── teams/
│   │       ├── Debraj.png
│   │       ├── Sayantan.png
│   │       ├── anadraj.jpg
│   │       ├── sayan.jpg
│   │       ├── tuhin.jpg
│   │       └── volu/
│   │           ├── anindo.jpg
│   │           ├── ganesh.jpg
│   │           ├── kishan.jpg
│   │           └── tamalika.jpg
│   └── components/
│       ├── Navbar.js              # Navigation with mobile sidebar
│       ├── Footer.js              # Footer with animations
│       ├── PassesCard.js          # Conference pass card component
│       ├── SpeackerCard.js        # Speaker/team member card
│       └── LandingPage/
│           ├── About.js           # About section
│           ├── HeroSeciton.js     # Hero section with glitch effect
│           ├── KeyNoteSpeakers.js # Keynote speakers section
│           ├── OurSpeakers.js     # Technical speakers section
│           ├── OverView.js        # Conference overview
│           ├── PassesSection.js   # Pricing/passes section
│           ├── Sponsers.js        # Sponsors carousel
│           ├── Teams.js           # Core team section
│           ├── TimeLine.js        # Event timeline
│           └── Volunteers.js      # Volunteers section
├── package.json
├── tailwind.config.js
├── next.config.js (not present - using defaults)
├── postcss.config.js (not present - using defaults)
└── README.md
```

---

## Key Features & Implementation Details

### 1. **App Router Architecture**
- Uses Next.js 14 App Router with route groups `(root)` for main layout
- Each page has its own layout.js for metadata and shared UI
- Client-side components marked with `"use client"` directive

### 2. **Custom Font System**
```javascript
// In layout.js files
const protestGourrilla = localFont({
  src: "../fonts/ProtestGuerrilla-Regular.woff",
  variable: "--font-protestG-regular",
  weight: "100 900",
});

const protestLight = localFont({
  src: "../fonts/ProtestLight.woff",
  variable: "--font-protestG-light",
  weight: "400 500 600",
});

// Applied via CSS variables
<body className={`${protestGourrilla.variable} ${protestLight.variable} antialiased bg-black`}>
```

### 3. **Tailwind CSS Configuration**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        primarybgimage: "linear-gradient(180deg, #EB4B19 14.63%, #C03C12 100%)",
        "radial-hero": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
      },
      boxShadow: {
        primaryshadow: '0px 9px 30px 0px rgba(231, 74, 25, 0.39)',
      },
    },
  },
  plugins: [],
};
```

### 4. **GSAP Animation System**
All landing page sections use GSAP with ScrollTrigger for scroll-based animations:

```javascript
// Pattern used across components
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Component = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    tl.fromTo(elementRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
  }, []);

  return <div ref={elementRef} className="...">...</div>;
};
```

### 5. **Hero Section with Glitch Effect**
- Custom CSS glitch animation using `::before` and `::after` pseudo-elements
- Animated background image with gradient overlay
- Staggered entrance animations for title, tagline, date, and CTA button

### 6. **Responsive Navigation**
- Desktop: Horizontal nav with hover underline animation
- Mobile: Slide-in sidebar with GSAP animation
- Smooth scroll to sections via `scrollIntoView`
- Outside-click detection to close sidebar

### 7. **Speaker/Team Card Component (SpeackerCard)**
- Reusable card for speakers, team members, volunteers
- Image with decorative vector background
- Social links (LinkedIn, Facebook, Twitter/X, Instagram)
- "Coming Soon" overlay for unannounced speakers
- Hover scale animation

### 8. **Passes Card Component (PassesCard)**
- Expandable description with "Show More/Less" toggle
- GSAP height animation for smooth expansion
- Responsive height handling (fit-content on mobile, fixed on desktop)
- Disabled registration button (placeholder)

### 9. **Sponsors Carousel**
- Category-based filtering (Venue Partner, Gold, Silver, Bronze, etc.)
- Infinite horizontal scroll animation with GSAP
- Dynamic image loading with Next.js Image component
- "Coming soon" placeholder for empty categories

### 10. **Timeline Component**
- Dual layout: Vertical (mobile) and Horizontal (desktop)
- Alternating left/right (mobile) or top/bottom (desktop) positioning
- GSAP scroll-triggered animations for each timeline item
- Date display with "To be announced" fallback

### 11. **Footer with Scroll Animations**
- GSAP ScrollTrigger for entrance animations
- Multi-column layout: Overview, Conference, Schedule, Contact
- Social media links
- Copyright notice

---

## Pages Detail

### Home Page (`/`)
Composes all landing sections in order:
1. HeroSeciton
2. OverView
3. Timeline
4. About
5. PassesSection
6. Sponsers
7. Teams (CoreTeams)
8. (Commented out) KeyNoteSpeakers, OurSpeakers, Volunteers

### CFP Page (`/cfp`)
- Call for Speakers for BSides Kolkata 2026
- Important dates (CFP opens/closes, speaker announcement)
- Topics of interest (20+ categories)
- Submission guidelines
- Speaker benefits
- Contact information

### CTF Page (`/ctf`)
- Capture The Flag competition details
- Challenge categories (Crypto, RE, Web, Binary, Forensics, Stego, Network)
- Participation benefits
- Registration process
- Comprehensive rules (11 general rules)
- Fair play and code of conduct

### Code of Conduct (`/codeofconduct`)
- 4 main principles: Respect & Diversity, Zero Tolerance, Immediate Action, Consequences
- Reporting email: bsideskolkata@gmail.com
- Professional, inclusive tone

### Join as Volunteer (`/join-as-volunteer`)
- Volunteer registration timeline
- Eligibility criteria
- 11 volunteer roles with detailed descriptions
- "Do not apply if" guidelines
- General terms and expectations
- Setup/teardown requirements
- Accommodation/travel support info
- Post-conference perks

### Sponsor Us (`/sponser-us`)
- 9 numbered benefit cards with detailed points
- Custom sponsorship packages section
- Contact emails: contact@bsideskolkata.in, bsideskolkata@gmail.com
- Grid layout with hover effects

### Village Page (`/village`)
- Hacking Village overview
- Lockpick Village details
- Instructor profile (Namrata Brahmkshatriya) with LinkedIn link
- Image with hover scale animation

---

## Component Architecture Patterns

### 1. **Client Component Pattern**
All interactive components use `"use client"` directive:
```javascript
"use client";
import { useEffect, useRef, useState } from "react";
// ... imports
```

### 2. **Ref-Based Animation Pattern**
```javascript
const elementRef = useRef(null);

useEffect(() => {
  gsap.fromTo(elementRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
}, []);
```

### 3. **ScrollTrigger Timeline Pattern**
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ref.current,
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 1,
  },
});
```

### 4. **Card Ref Array Pattern** (for multiple cards)
```javascript
const cardRefs = useRef([]);

// In render:
ref={(el) => (cardRefs.current[index] = el)}

// In useEffect:
cardRefs.current.forEach((card, index) => {
  gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, delay: index * 0.1 });
});
```

### 5. **Conditional Props Spread**
```javascript
{...(speaker.linkedInHandle && { linkedInHandle: speaker.linkedInHandle })}
{...(speaker.twitterHandle && { twitterHandle: speaker.twitterHandle })}
```

---

## Styling System

### Color Palette
- **Primary**: `#EB4B19` (Orange/Red) - Used for accents, buttons, highlights
- **Primary Dark**: `#C03C12` - Gradient end color
- **Background**: `#000000` (Black) - Main background
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#E6E6E682` (White with opacity)
- **Card Background**: `#1A1A1A` (Dark gray)

### Custom CSS Classes (globals.css)
- `.glitch-wrapper` / `.glitch` - Glitch text animation
- `.nav-link` - Underline hover animation
- Smooth scroll behavior on html element

### Responsive Breakpoints
- Mobile: Default (< 768px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `lg:px-44` (max-width containers)

---

## Asset Management

### Images
- **Hero**: AVIF format for modern browsers, PNG fallback
- **Speakers/Team**: JPG format
- **Icons**: SVG format
- **Logos**: PNG + SVG
- **Backgrounds**: PNG

### Next.js Image Optimization
```javascript
import Image from "next/image";
import heroImage from "../../assets/hero-image.avif";

<Image
  src={heroImage}
  alt="HERO SECTION BSIDE"
  className="h-full w-full object-cover"
/>
```

---

## Deployment Configuration

### Vercel Deployment
- `@vercel/analytics` integrated for privacy-friendly analytics
- Automatic static optimization for pages without `getServerSideProps`
- Image optimization via Next.js Image component
- Font optimization via `next/font/local`

### Build Commands
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Development Workflow

### Local Development
```bash
npm run dev        # Start development server on localhost:3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Code Quality
- ESLint with Next.js recommended config
- Component-based architecture
- Consistent naming conventions (PascalCase for components)
- Reusable components (SpeackerCard, PassesCard)

---

## Performance Optimizations

1. **Next.js Image Optimization** - Automatic WebP/AVIF conversion, lazy loading
2. **Font Optimization** - `next/font/local` for self-hosted fonts with preload
3. **Code Splitting** - Automatic per-page code splitting
4. **GSAP Context** - Proper cleanup with `gsap.context()` in Timeline component
5. **Conditional Rendering** - Commented out sections for future features

---

## Accessibility Considerations

- Semantic HTML structure (h1-h3 hierarchy)
- Alt text for all images
- Focus-visible states for interactive elements
- Color contrast ratios (white on black, orange accents)
- Keyboard navigation support
- Screen reader friendly link text

---

## Future Enhancement Opportunities

1. **TypeScript Migration** - Add type safety
2. **Content Management** - Move speaker/event data to CMS or JSON files
3. **Internationalization** - Multi-language support
4. **Progressive Web App** - Offline support, installability
5. **Testing** - Unit tests (Jest), E2E tests (Playwright/Cypress)
6. **Storybook** - Component documentation
7. **Animation Performance** - `will-change` hints, reduced motion support
8. **SEO Enhancement** - Structured data, sitemap generation
9. **Form Handling** - Volunteer/sponsor registration forms with validation
10. **CMS Integration** - Headless CMS for dynamic content

---

## Key Technical Decisions

| Decision | Rationale |
|----------|-----------|
| Next.js App Router | Modern React patterns, better performance, SEO |
| Tailwind CSS | Rapid UI development, consistent design system |
| GSAP + ScrollTrigger | Professional animations, scroll-based triggers |
| Client Components | Interactivity, animations, browser APIs |
| Local Fonts | Performance, privacy, no external requests |
| Component Composition | Reusability, maintainability |
| Responsive First | Mobile-first approach with progressive enhancement |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Maintenance Notes

- All layout.js files are identical - could be consolidated into a shared layout
- Speaker/team data is hardcoded in components - consider external data source
- GSAP animations use `scrub: 1` for smooth scroll synchronization
- Commented sections indicate planned features (Keynote speakers, Volunteers, Village nav)
- Sponsor images array is empty - ready for dynamic population

---

*Generated from codebase analysis on 2026-10-27*