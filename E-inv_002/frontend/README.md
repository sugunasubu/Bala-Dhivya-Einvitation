# Bala Murugan & Dhivya Wedding Invitation — React + Tailwind CSS

Component-based React application using Tailwind CSS for Bala Murugan & Dhivya's wedding invitation. The original layout, visual styling, typography, photographs, and interactive behaviors are preserved with pure React state and hooks.

## Architecture

- **React 18** with functional components and custom hooks
- **Tailwind CSS** for responsive styling and visual effects
- **Vite** fast bundling and production build pipeline

```
src/
├── components/
│   ├── frames/
│   │   ├── Frame01Opening.jsx        # Opening Gate double-door entrance
│   │   ├── Frame02Hero.jsx           # Hero section with countdown timer
│   │   ├── Frame03Couple.jsx         # Couple portrait and formal introduction
│   │   ├── Frame04Events.jsx         # Wedding celebration schedule
│   │   ├── Frame05Venue.jsx          # Venue details with directions and copy address
│   │   ├── Frame06GuestGuide.jsx     # Travel and stay options for guests
│   │   ├── Frame07ExploreMadurai.jsx # Explore Trichy interactive showcase & lightbox
│   │   └── Frame08FamilyDetails.jsx  # Monogram and family contact information
│   ├── common/
│   │   ├── AmbientCanvas.jsx         # Ambient falling petals and slow sparkles
│   │   ├── Countdown.jsx             # Live countdown to wedding date
│   │   ├── ImageLightbox.jsx         # Modal zoom lightbox for landmark photographs
│   │   ├── OrnamentDivider.jsx       # Reusable gold ornament divider
│   │   └── ScrollPlane.jsx           # Trailing flight plane along scroll rail
│   └── layout/
│       └── InvitationLayout.jsx      # Global invitation wrapper and layout shell
├── hooks/
│   ├── useCountdown.js               # Reactive countdown state calculation
│   ├── useExploreCarousel.js         # Slide carousel state with keyboard and swipe
│   ├── useFrameNavigation.js         # IntersectionObserver frame tracker
│   └── useScrollReveal.js            # Smooth scroll element reveal
├── data/
│   ├── weddingData.js                # Core wedding metadata and timings
│   ├── guestGuideData.js             # Travel options and map links
│   └── explorePlacesData.js          # Landmark photos, details, and attributions
├── App.jsx                           # Main application orchestrator
├── main.jsx                          # React 18 DOM mount entry point
└── index.css                         # Tailwind directives and core keyframe definitions
```

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
