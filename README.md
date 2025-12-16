# Developer Portfolio

A clean, minimal developer portfolio built with Next.js (App Router) and Tailwind CSS.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── skills/
│   │   └── page.tsx        # Skills page
│   ├── clicks/
│   │   └── page.tsx        # Clicks (photo gallery) page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── SectionHeader.tsx   # Reusable section header
│   ├── Card.tsx            # Reusable card component
│   └── CTAButton.tsx       # Call-to-action button component
└── public/                 # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Components

### Reusable Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Footer with social links
- **SectionHeader**: Consistent page headers with optional subtitle
- **Card**: Reusable card container
- **CTAButton**: Primary and secondary button styles

## Customization

- Update personal information in page components
- Modify colors in `tailwind.config.js`
- Add your content to each page
- Replace placeholder links in Footer and Contact page
