# Voscus Landing Page

**The trust layer for autonomous AI agents.**

A modern, interactive landing page showcasing Voscus's real-time AI agent monitoring capabilities with live demos of action detection.

## Features

✨ **Interactive Demo Section**
- 3 live scenarios (Email, Code, Database)
- Real-time action timeline visualization
- Risk severity indicators
- Blast radius calculations

🎨 **Modern Design**
- Clean white background with navy accents
- Smooth scroll animations
- Responsive grid layouts
- Hover interactions

⚡ **Performance**
- Built with Next.js + React
- Tailwind CSS for styling
- Optimized for production
- Vercel-ready deployment

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development

1. **Clone and install:**
```bash
cd voscus-landing
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
voscus-landing/
├── pages/
│   ├── _app.js              # App wrapper
│   └── index.js             # Home page
├── styles/
│   └── globals.css          # Global Tailwind styles
├── voscus-landing.jsx       # Main landing component
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-url>
git push -u origin main
```

2. **Connect to Vercel:**
- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Vercel auto-detects Next.js config
- Click "Deploy"

3. **Custom domain:**
- Go to project settings
- Add your domain under "Domains"
- Follow DNS instructions

## Customization

### Update Content
Edit `voscus-landing.jsx`:
- Hero text and CTAs
- Demo scenarios in `DemoData` object
- Features, use cases, footer

### Change Colors
Edit `tailwind.config.js` theme colors, or modify inline Tailwind classes.

### Add Components
Create reusable components in a new `components/` folder and import them into `voscus-landing.jsx`.

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Fonts:** Syne (display), Space Mono (mono), System fonts (body)

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is tree-shaken via Tailwind
- JavaScript is minified in production
- Fonts are served from Google Fonts CDN

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## SEO

Default meta tags are set in `pages/index.js`. Update:
- Title
- Description
- Open Graph tags

For advanced SEO, consider adding:
- Structured data (Schema.org)
- Sitemap
- Robots.txt

## Support & Questions

For issues or feature requests, reach out to the Voscus team.

---

**Built for the autonomous AI age.**
