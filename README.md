# Bala Murugan & Dhivya — Wedding E-Invitation

An elegant, interactive digital wedding invitation built with React 18, Tailwind CSS, and Vite for **Bala Murugan & Dhivya**.

## Wedding Celebrations

- **Date**: Friday, 20 November 2026
- **Muhurtham**: 4:30 AM to 6:30 AM (Brahma Muhurtham)
- **Wedding Venue**: Aathi Maariamman Temple, Samayapuram
- **Reception**: Hotel S President - First Floor (Near Samayapuram Mariamman Temple)

## Features

- **Opening Ceremony Gate**: Double-door interactive entrance animation
- **Hero Frame**: Live reactive countdown timer synchronized to Brahma Muhurtham (20 Nov 2026, 4:30 AM)
- **Couple Introduction**: Elegant arched couple portrait with custom calligraphy and bio details
- **Celebration Schedule**: Timings and venues for Wedding and Reception
- **Interactive Venue Card**: Address details, directions, and one-tap Google Maps integration
- **Guest Guide**: Samayapuram & Trichy travel assistance and nearby stay recommendations
- **Explore Trichy**: Curated gallery of Trichy heritage landmarks with interactive image lightbox and map links
- **Family Details & Monogram**: Custom B & D monogram with laurel wreath and RSVP contacts
- **Ambient Visual Effects**: Floating sakura petals and subtle golden sparkle animations

## Project Structure

```
E-inv_002/
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── common/           # AmbientCanvas, Countdown, ImageLightbox, OrnamentDivider
    │   │   ├── frames/           # Invitation frames (Hero, Couple, Events, Venue, Guide, Explore, Family)
    │   │   └── layout/           # InvitationLayout wrapper
    │   ├── data/                 # Wedding metadata, events, guest guide, and explore places
    │   ├── hooks/                # useCountdown, useExploreCarousel, useScrollReveal
    │   ├── App.jsx               # Main application component
    │   ├── main.jsx              # React DOM entry point
    │   └── index.css             # Tailwind directives and custom animation keyframes
    ├── public/
    │   └── assets/images/        # High-resolution optimized WebP assets
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm

### Setup & Run Locally
```bash
# 1. Navigate to the frontend directory
cd E-inv_002/frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Production Build
```bash
# Inside E-inv_002/frontend:
npm run build

# Preview the production build
npm run preview
```

