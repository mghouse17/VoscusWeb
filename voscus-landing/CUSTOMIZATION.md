# Voscus Landing Page - Customization Guide

This guide explains how to customize and update the landing page for future needs.

## Project Structure Overview

```
src/
├── app/
│   ├── layout.tsx         # Root layout, metadata, global setup
│   └── page.tsx           # Main landing page (assembles all sections)
├── components/
│   ├── Header.tsx         # Navigation and mobile menu
│   ├── Hero.tsx           # Hero section with CTA
│   ├── ProblemSection.tsx  # Problem statement and pain points
│   ├── ProductSection.tsx  # Product features and dashboard metrics
│   ├── WhyVoscusSection.tsx # Competitive positioning
│   ├── ComparisonSection.tsx # Feature comparison table
│   ├── UseCasesSection.tsx   # Use case cards
│   ├── CTASection.tsx        # Final call-to-action
│   ├── Footer.tsx            # Footer with links
│   └── index.ts             # Barrel export for clean imports
└── globals.css             # Global styles, animations, utilities
```

## Common Customizations

### 1. Update Copy/Text Content

**Hero headline** - `src/components/Hero.tsx`:
```tsx
<h1>
  Watch Every Action.
  <br />
  <span className="...">Understand Every Risk.</span>
</h1>
```

**Hero description** - `src/components/Hero.tsx`:
```tsx
<p>
  Your new description goes here...
</p>
```

**Feature cards** - Each section has arrays you can modify:
```tsx
const features = [
  {
    title: 'Your Feature',
    description: 'Your description',
    icon: YourIcon,
  },
  // More items...
];
```

### 2. Change Colors

**Color palette** - `tailwind.config.js`:

```javascript
colors: {
  navy: {
    50: '#f0f4f8',
    100: '#e1e8f0',
    // ... change these hex codes
    900: '#0a1229',
  },
}
```

**Using colors in components**:
```tsx
<div className="text-navy-900 bg-navy-50">
  This uses the navy palette
</div>
```

### 3. Replace the Logo

**Option A: Use local image** - `src/components/Header.tsx`:
```tsx
<img
  src={logoUrl}
  alt="Voscus"
  className="h-8 w-8 object-contain"
/>
```

**Option B: Use SVG inline** - `src/components/Header.tsx`:
```tsx
<svg className="h-8 w-8">
  {/* SVG code */}
</svg>
```

**Option C: Use external URL**:
```tsx
const LOGO_URL = 'https://cdn.example.com/logo.png';
```

### 4. Add a New Section

**Step 1: Create component** - `src/components/NewSection.tsx`:

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NewSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Your content here */}
        </motion.div>
      </div>
    </section>
  );
};
```

**Step 2: Import in page.tsx** - `src/app/page.tsx`:

```tsx
import { NewSection } from '@/components/NewSection';

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <NewSection />
      {/* ... more sections ... */}
    </main>
  );
}
```

### 5. Modify Navigation Links

**Header navigation** - `src/components/Header.tsx`:

```tsx
<Link href="#section-id" className="...">
  Section Name
</Link>
```

Each section needs an `id`:
```tsx
<section id="section-id" className="...">
  {/* Content */}
</section>
```

### 6. Update CTA Buttons

**Email link** - Change email address:
```tsx
window.location.href = 'mailto:your-email@voscus.ai?subject=Demo Request';
```

**External link**:
```tsx
window.location.href = 'https://your-link.com';
```

**Open modal/dialog**:
```tsx
// Add state and conditional rendering
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>
  Open Demo
</button>

{isOpen && <DemoModal onClose={() => setIsOpen(false)} />}
```

### 7. Adjust Animations

**Animation duration** - `src/globals.css`:

```css
@keyframes fadeIn {
  '0%': { opacity: '0', transform: 'translateY(8px)' },
  '100%': { opacity: '1', transform: 'translateY(0)' },
}
```

**Or in Tailwind config**:
```javascript
animation: {
  fadeIn: 'fadeIn 0.5s ease-out forwards', // Change duration
}
```

**Motion component duration** - In any component:
```tsx
transition={{ duration: 0.8 }} // Increase for slower animation
```

### 8. Change Background Colors/Patterns

**Section background** - Each section:
```tsx
<section className="bg-white">
  {/* white background */}
</section>

<section className="bg-navy-50">
  {/* light navy background */}
</section>

<section className="bg-gradient-to-r from-navy-50 to-white">
  {/* gradient background */}
</section>
```

**Add background pattern**:
```tsx
<section className="bg-white relative">
  <div className="absolute inset-0 opacity-5">
    {/* Pattern SVG or image */}
  </div>
  {/* Content on top */}
</section>
```

### 9. Update Metadata

**Page title and description** - `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Voscus - AI Agent Watchdog',
  description: 'Your description here...',
  openGraph: {
    title: 'Your OG title',
    description: 'Your OG description',
    // ...
  },
};
```

### 10. Add Form Integration

**Create form component** - `src/components/DemoForm.tsx`:

```tsx
'use client';

import React, { useState } from 'react';

export const DemoForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Call your API or service
    const response = await fetch('/api/demo', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    
    setLoading(false);
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Request Demo'}
      </button>
    </form>
  );
};
```

**Use in CTA section** - `src/components/CTASection.tsx`:

```tsx
<DemoForm />
```

## Styling Best Practices

### Use Tailwind Classes

```tsx
// ✅ Good - Uses Tailwind
<div className="p-8 rounded-lg bg-navy-50 border border-navy-100">

// ❌ Bad - Inline styles
<div style={{ padding: '32px', borderRadius: '8px' }}>
```

### Responsive Design

```tsx
// Base style, then responsive overrides
<div className="px-4 md:px-8 lg:px-12">
  Text padding: 4px mobile, 8px tablet, 12px desktop
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  1 column mobile, 2 columns tablet, 3 columns desktop
</div>
```

### Card Styling Pattern

```tsx
<div className="p-6 rounded-xl border border-navy-100 bg-white hover:border-navy-200 transition-all duration-300 card-subtle">
  {/* Content */}
</div>
```

## Animation Best Practices

### Follow Motion Guidelines

- **Button clicks**: 100-160ms
- **Hover effects**: 150-200ms  
- **Section reveals**: 200-600ms
- **Stagger delays**: 30-80ms between items

### Example Stagger Animation

```tsx
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05, // 50ms between items
      delayChildren: 0.1,    // Wait 100ms before starting
    },
  },
};

const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};
```

## Testing Changes

### Local Testing

```bash
npm run dev
# Visit http://localhost:3000
# Changes auto-refresh
```

### Mobile Testing

```bash
# Find local IP
ipconfig getifaddr en0  # Mac
ipconfig               # Windows

# Visit from phone browser
http://YOUR_IP:3000
```

### Performance Testing

```bash
npm run build
# Check bundle size output
# Look for warnings about large modules
```

## Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update specific package
npm install package-name@latest

# Update all packages
npm update

# Check for security issues
npm audit
npm audit fix
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes, test locally
git add .
git commit -m "Add new section to landing page"

# Push to GitHub
git push origin feature/new-section

# Create Pull Request on GitHub for review
# After review, merge to main

# Deploy automatically triggers on main merge
```

## Performance Optimization

### Images

Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/image.png"
  alt="Description"
  width={400}
  height={300}
  priority // For above-the-fold images
/>
```

### Animations

Only animate necessary properties:
```tsx
// ✅ Good - only transform and opacity
transition={{ duration: 0.3 }}

// ❌ Bad - animates everything
transition: all 300ms
```

### Code Splitting

Already handled by Next.js. Keep components modular.

## Accessibility

### Always include alt text
```tsx
<img alt="Brief description" src="..." />
```

### Proper heading hierarchy
```tsx
<h1>Main title</h1>
<h2>Section title</h2>
<h3>Subsection title</h3>
```

### Color contrast

Navy (#1a2d4d) on white meets WCAG AAA standards.

### Focus states

Already included with `focus-visible` styles in `globals.css`.

---

## Quick Reference

| Task | File(s) | Changes |
|------|---------|---------|
| Change copy | `src/components/*.tsx` | Edit text in JSX |
| Change colors | `tailwind.config.js` | Update color hex values |
| Add section | Create new component | Import in `page.tsx` |
| Update CTA email | `src/components/*.tsx` | Change email address |
| Adjust animations | `src/globals.css` | Modify keyframes/duration |
| Change logo | `public/logo.png` | Replace image file |
| Update metadata | `src/app/layout.tsx` | Modify metadata object |
| Add form | Create component | Integrate with API |

---

**Questions?** Refer to component files—they're well-structured and documented.
