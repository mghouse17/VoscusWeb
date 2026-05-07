# Voscus Landing Page - Deployment Guide

This guide covers deploying the Voscus landing page to various platforms.

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and most optimized way to deploy a Next.js site.

### Step 1: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial Voscus landing page commit"
git branch -M main
git remote add origin https://github.com/yourusername/voscus-landing
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel with GitHub
4. Click "New Project"
5. Select the `voscus-landing` repository
6. Click "Import"
7. Vercel automatically detects Next.js and configures everything
8. Click "Deploy"

**Deployment takes 1-3 minutes. Your site is live!**

### Step 3: Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., voscus.ai)
4. Follow DNS instructions for your domain registrar
5. Update your domain's nameservers or CNAME records

## Deploy to Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and authorize
4. Select the `voscus-landing` repository

### Step 2: Configure Build Settings

Set these build settings:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.17.0 or higher

### Step 3: Deploy

Click "Deploy site" and wait 2-5 minutes for deployment to complete.

## Deploy to AWS Amplify

### Step 1: Connect Repository

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify (requires AWS account)
amplify configure
```

### Step 2: Initialize and Deploy

```bash
# In project root
amplify init
amplify publish
```

This creates AWS resources and deploys your site.

## Deploy to Heroku

### Step 1: Create Heroku Account

Go to [heroku.com](https://heroku.com) and sign up.

### Step 2: Install Heroku CLI

```bash
# On macOS with Homebrew
brew tap heroku/brew && brew install heroku

# On Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli

# Verify installation
heroku --version
```

### Step 3: Deploy

```bash
# Login to Heroku
heroku login

# Create app
heroku create voscus-landing

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

Your site is live at `https://voscus-landing.herokuapp.com`

## Deploy to Docker (Self-Hosted)

### Step 1: Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Step 2: Create .dockerignore

```
node_modules
npm-debug.log
.next
.git
.gitignore
README.md
.env
.DS_Store
```

### Step 3: Build and Run

```bash
# Build Docker image
docker build -t voscus-landing .

# Run container
docker run -p 3000:3000 voscus-landing

# Visit http://localhost:3000
```

### Step 4: Deploy to Your Server

Push the Docker image to a registry (Docker Hub, AWS ECR, etc.) and deploy to your server or orchestration platform.

## Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Site loads without errors
- [ ] All sections render correctly
- [ ] Navigation links work (scroll to sections)
- [ ] Buttons are clickable
- [ ] Animations are smooth
- [ ] Mobile responsive (test on phone)
- [ ] Email links work (book a demo)
- [ ] Images load properly
- [ ] Page loads within 3 seconds

## Environment Variables

Currently, the site has no environment variables. If you add features requiring secrets (analytics, APIs), create a `.env.local` file:

```
NEXT_PUBLIC_GA_ID=your-analytics-id
NEXT_PUBLIC_API_KEY=your-api-key
```

## Custom Domain Setup

### For Vercel

1. In Vercel dashboard, go to project Settings
2. Click "Domains"
3. Add your domain
4. Follow DNS configuration instructions

### For Other Platforms

Update your domain registrar's DNS records:

- **Type A records** point to platform's IP
- **CNAME records** point to platform's domain

Contact your hosting provider for specific DNS details.

## SSL/TLS Certificate

All modern platforms provide free SSL certificates automatically. Your site will have:

- ✅ HTTPS enabled by default
- ✅ Automatic certificate renewal
- ✅ Security headers configured

## Performance Optimization Post-Deploy

### Enable Caching

- Vercel: Automatically configured
- Netlify: Add `netlify.toml`:
  ```toml
  [[headers]]
    for = "/*"
    [headers.values]
      Cache-Control = "public, max-age=3600"
  ```

### Monitor Performance

- Vercel Analytics: Built-in
- Google PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- Lighthouse: Built into Chrome DevTools

## Troubleshooting

### Site not building?

```bash
# Clear cache and rebuild
npm run build
# Check for errors in build output
```

### Images not loading?

- Ensure images are in `/public` directory
- Check image paths (should be `/imagename.png`)
- Verify permissions on image files

### Animations not smooth?

- Check browser console for JavaScript errors
- Verify Framer Motion is installed: `npm list framer-motion`
- Test on different browsers/devices

### Performance issues?

- Check page size: `npm run build` shows bundle size
- Use browser DevTools Network tab to identify slow resources
- Enable image optimization (add Image component from next/image)

## Updating Your Site

After deployment, making updates is easy:

```bash
# Make code changes
# ...

# Commit and push
git add .
git commit -m "Update landing page copy"
git push origin main

# Automatic redeploy triggers in ~30 seconds
# Monitor deployment in your platform's dashboard
```

## Monitoring & Analytics

Add analytics to track visitors and conversions:

### Google Analytics

Add to `src/app/layout.tsx`:

```tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
  strategy="afterInteractive"
/>
<Script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YOUR_ID');
    `,
  }}
  strategy="afterInteractive"
/>
```

### Vercel Analytics

Included free with Vercel. No setup required!

## Support

For deployment issues:

1. Check platform-specific documentation
2. Review deployment logs in your platform's dashboard
3. Test locally: `npm run dev` should work
4. Verify all environment variables are set correctly

---

**Happy deploying!** Your Voscus landing page is ready for the world.
