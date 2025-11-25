# CORPROS GROUP Website

A high-performance, ultra-premium corporate website built with Next.js 14+ and following the "Dark Architectural Luxury" design aesthetic.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Backend**: Firebase (Firestore)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project (for contact form)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Create a `.env.local` file in the root directory with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Add your assets:
   - Place logos in `public/logos/`
   - Place images in `public/images/`
   - Place videos in `public/videos/`
   - See `public/README_ASSETS.md` for details

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
corpros-web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── profils/           # Nos Profils page
│   ├── methode/          # Notre Méthode page
│   ├── vision/           # Notre Vision page
│   ├── contact/          # Contact page with form
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Input.tsx
│   └── ...
├── lib/                   # Utilities
│   ├── firebase.ts       # Firebase configuration
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    ├── images/
    ├── videos/
    └── logos/
```

## Design System

The website follows the design specifications in `design.json`:

- **Colors**: Dark backgrounds (#262626), Gold accents (#C6A55C), Hairline dividers
- **Typography**: Libre Baskerville (serif) for headings, Poppins (sans) for body
- **Spacing**: 120px section gaps, 24px component gaps
- **Atmosphere**: Noise texture overlay, cinematic animations

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode only
- ✅ Smooth animations with Framer Motion
- ✅ Contact form with conditional fields
- ✅ Firebase Firestore integration
- ✅ SEO optimized
- ✅ Accessible navigation

## Firebase Setup

1. Create a Firestore database in your Firebase project
2. The contact form automatically saves submissions to a `leads` collection
3. No security rules are required for basic functionality (consider adding rules for production)

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Updating Content

- Edit page components in `app/` directory
- Update navigation links in `components/Header.tsx`
- Modify footer content in `components/Footer.tsx`

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Design tokens: Defined in `globals.css` CSS variables

### Adding Assets

See `public/README_ASSETS.md` for guidelines on adding images, videos, and logos.

## License

© 2024 CORPROS GROUP
