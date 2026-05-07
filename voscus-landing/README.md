# Voscus Landing Page

A modern, production-grade landing page for Voscus—the AI agent watchdog platform. Built with Next.js 14, React 18, Tailwind CSS, and Framer Motion for smooth animations following Emil Kowalski's design engineering principles.

## Overview

This landing page communicates Voscus's core value proposition: action-level oversight for autonomous AI agents. It includes:

- **Hero Section**: Strong positioning with animated background
- **Problem Section**: Explains why agent action monitoring matters
- **Product Features**: Detailed breakdown of Voscus capabilities
- **Competitive Positioning**: Why Voscus differs from guardrails/filters
- **Detailed Comparison**: Feature-by-feature comparison with competitors
- **Use Cases**: Real-world applications across industries
- **Final CTA**: Drive conversions with clear calls-to-action
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## Design Principles

This site follows design engineering best practices:

- **Smooth animations**: 150-250ms durations with custom easing curves
- **Hardware acceleration**: CSS transforms and opacity transitions
- **Responsive interactions**: Hover states, focus states, and active states
- **Accessibility**: WCAG compliant, reduced motion support, proper focus management
- **Performance**: Optimized animations, lazy-loaded sections, minimal JavaScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) or any Node.js host

## Getting Started

### Prerequisites

- Node.js 18.17+ (check with `node --version`)
- npm or yarn

### Local Development

1. **Clone the repository** (or extract the files):
   ```bash
   cd voscus-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Visit [http://localhost:3000](http://localhost:3000)
   - The page will auto-refresh as you make changes

### Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build and serves it locally.

## Project Structure

```
voscus-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── ...
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ProblemSection.tsx   # Problem statement
│   │   ├── ProductSection.tsx   # Product features
│   │   ├── WhyVoscusSection.tsx # Competitive positioning
│   │   ├── ComparisonSection.tsx # Feature comparison
│   │   ├── UseCasesSection.tsx   # Use cases
│   │   ├── CTASection.tsx        # Final CTA
│   │   ├── Footer.tsx            # Footer
│   │   └── index.ts             # Component exports
│   └── globals.css             # Global styles and animations
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## Key Features

### Dynamic Sections

All sections use Framer Motion with scroll-triggered animations:
- Staggered item reveals
- Smooth opacity and position transitions
- Custom easing curves for natural motion
- Hover effects on cards and buttons

### Customization

#### Updating Content

Edit content in `src/app/page.tsx` and individual component files:

```tsx
// Example: Change hero headline
<h1>Your New Headline</h1>
```

#### Changing Colors

Colors are defined in `tailwind.config.js`. The navy color palette:

```javascript
navy: {
  50: '#f0f4f8',   // Lightest
  100: '#e1e8f0',
  // ...
  900: '#0a1229',  // Darkest
}
```

To use different colors, update the Tailwind config and replace color class names throughout the components.

#### Adding Sections

1. Create a new component in `src/components/SectionName.tsx`
2. Import it in `src/app/page.tsx`
3. Add it to the page structure:
   ```tsx
   <SectionName />
   ```

#### Replacing the Logo

Replace the logo URL in `src/app/page.tsx`:

```tsx
const LOGO_URL = 'your-image-path-or-data-uri';
```

Or update Header/Footer components to accept a local image path.

## Animation Guidelines

This site follows Emil Kowalski's design engineering principles:

### Animation Duration

- **Button feedback**: 100-160ms
- **Hover effects**: 150-200ms
- **Section reveals**: 200-600ms
- **Marketing animations**: Can be longer

### Easing Curves

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);     /* Responsive entry */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* Natural motion */
```

### Key Rules

- ✅ Entrance animations use `ease-out`
- ✅ Movement animations use `ease-in-out`
- ✅ Hover states under 300ms
- ❌ Never use `ease-in` for UI (feels sluggish)
- ❌ Never animate keyboard-triggered actions

## Deployment

### Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and requires minimal configuration:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/voscus-landing
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Vercel automatically detects Next.js and sets up the build

3. **Custom Domain** (optional):
   - In Vercel dashboard, go to Settings > Domains
   - Add your domain (e.g., voscus.ai)
   - Follow DNS configuration instructions

### Deploy to Other Platforms

The site can be deployed to any Node.js host:

- **Netlify**: Use `npm run build && npm start`
- **Heroku**: Add `Procfile` with `web: npm start`
- **AWS**: Use Amplify or EC2
- **Docker**: Create `Dockerfile` for containerization

## Performance Optimization

The landing page is already optimized:

- ✅ Next.js Image Optimization (future updates)
- ✅ CSS-based animations (hardware accelerated)
- ✅ Code splitting per route
- ✅ Minified CSS and JavaScript
- ✅ Optimized font loading
- ✅ Lazy-loaded components on scroll

To further improve:

1. Add image optimization for any custom images
2. Compress images to WebP format
3. Enable Gzip compression on your server
4. Use a CDN (Vercel handles this automatically)

## Maintenance & Updates

### Adding New Features

1. Create new component in `src/components/`
2. Use the same motion and styling patterns
3. Follow the established color and animation guidelines
4. Test on mobile and desktop

### Updating Copy

Most copy is directly in component files. Search for specific text and update as needed.

### Testing

```bash
# Run development server
npm run dev

# Test on mobile
# 1. Find your local IP: ipconfig getifaddr en0 (Mac) or ipconfig (Windows)
# 2. Visit http://YOUR_IP:3000 on mobile
```

## Common Questions

### How do I change the accent color?

Update `tailwind.config.js` and replace all `navy-` references with your color. Example for blue:

```javascript
colors: {
  blue: { /* your color palette */ }
}
```

### How do I add a blog section?

1. Create `src/components/BlogSection.tsx`
2. Add it to `src/app/page.tsx`
3. Style it to match the design system

### How do I track conversions?

Add analytics to `src/app/layout.tsx`:

```tsx
<script
  async
  src="https://your-analytics-script"
/>
```

### Can I add forms?

Yes! Create a form component and integrate with a service like:
- Formspree
- Typeform
- Hubspot
- Your own backend

## Support & Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Emil's Design Engineering Course](https://animations.dev)

### Troubleshooting

**Port already in use**:
```bash
npm run dev -- -p 3001
```

**Tailwind not compiling**:
```bash
npm install -D tailwindcss@latest
```

**Module not found errors**:
- Ensure all imports use `@/` alias
- Check that component files have `.tsx` extension

## License

This landing page is ready for production use. Customize it for your brand and deploy!

## Questions?

For implementation questions or customization help, refer to the component files—each is well-commented with clear structure.

---

**Built for Voscus** | Enterprise-grade AI agent oversight
