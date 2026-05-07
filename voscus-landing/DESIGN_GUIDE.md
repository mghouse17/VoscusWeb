# Voscus Landing Page - Visual Design Guide

## 🎯 Design Overview

The landing page follows a **modern, clean aesthetic** inspired by Polarity, Vercel, and Cursor.

### Color Palette
- **Background:** White (#FFFFFF)
- **Primary Text:** Navy (#0F172E)
- **Secondary Text:** Slate (#64748B)
- **Accent:** Blue (#3B82F6)
- **Danger:** Red (#EF4444)

### Typography
- **Display Font:** Syne (Display headings - bold, geometric)
- **Body Font:** System fonts (clean, efficient)
- **Mono Font:** Space Mono (Code/timeline)

---

## 📄 Page Sections

### 1. Navigation Bar (Fixed)
```
[ Logo + Voscus ] [Product | Why Voscus | Use Cases] [Book a Demo Button]
```
- Sticky top navigation
- Backdrop blur effect
- Dark button for CTA

### 2. Hero Section
```
BADGE: "Autonomous agent security"

HEADING:
Watch every action.
Catch every risk.
(with blue gradient on "Catch every risk")

SUBHEADING:
Voscus monitors autonomous AI agents in real time.
See what they do. Detect risky behavior. 
Block incidents before they scale.

BUTTONS:
[Primary: Book a Demo →] [Secondary: View Platform]
```
- Large typography (56-72px)
- Staggered animations on load
- Centered layout with breathing room

### 3. Live Demo Section
```
TITLE: "See it in action"
SUBTITLE: "Watch Voscus catch dangerous agent actions in real time."

DEMO SELECTOR (3 Cards):
┌─────────────────────────────────────────┐
│ 📧 Email             │ 💻 Code          │ 🗄️ Database    │
│ Sent 50K emails... │ Unreviewed merge...│ Delete cascade...│
└─────────────────────────────────────────┘

DEMO DISPLAY (Glass morphism container):
┌────────────────────────────────────────────────────────────┐
│ Email Agent Gone Wrong                    [CRITICAL BADGE] │
│ Sent 50,000 emails to external list                        │
│                                                             │
│ 14:32:01 Agent triggered                                   │
│ 14:32:03 Drafting email to...                              │
│ 14:32:05 ⚠️  ANOMALY DETECTED                              │
│ 14:32:06 Unusual recipient list identified                │
│ 14:32:07 🛑 ACTION BLOCKED                                │
│                                                             │
│ ┌───────────────────────────────────────────────────────┐  │
│ │ ⚠️ Action Blocked                                     │  │
│ │ Blast radius: 50K+ recipients, compliance violation  │  │
│ └───────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```
- Interactive tabs (email/code/database)
- Animated timeline reveal
- Color-coded status indicators
- Red alert cards for blocked actions

### 4. Problem Section
```
HEADING: "Why agents are different"
SUBHEADING: "Guardrails and filters catch bad text. 
             Voscus catches bad actions."

TWO-COLUMN LAYOUT:

┌─────────────────────────┐  ┌─────────────────────────┐
│ TRADITIONAL APPROACH    │  │ VOSCUS ⭐              │
│                         │  │                         │
│ Prompt & Response       │  │ Action-Level Oversight  │
│ Filtering               │  │                         │
│                         │  │ ✓ Monitor emails        │
│ ✓ Scans LLM input/out   │  │ ✓ Watch code commits    │
│ ✓ Catches bad text      │  │ ✓ Track DB queries      │
│ ✗ Ignores actual actions│  │ ✓ Calculate blast radius│
│ ✗ No blast radius calc  │  │                         │
└─────────────────────────┘  └─────────────────────────┘
```
- Side-by-side comparison
- Checkmarks and X's for clarity
- Blue accent border on Voscus card

### 5. Features Section (Dark Background)
```
HEADING: "Built for real threats"

THREE FEATURE CARDS:

┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐
│ 👁️ Real-time         │ │ ⚡ Risk Detection    │ │ ⚠️ Blast Radius     │
│ Monitoring           │ │                      │ │                      │
│                      │ │ Anomaly detection    │ │ Understand impact    │
│ See every agent      │ │ identifies risky     │ │ scope and affected   │
│ action as it happens │ │ patterns             │ │ systems instantly    │
│ across your tools    │ │ automatically        │ │                      │
└──────────────────────┘ └──────────────────────┘ └──────────────────────┘
```
- Dark slate background (#1E293B)
- White cards with blue accents
- Icon + title + description layout
- Hover lift effects

### 6. Use Cases Section
```
HEADING: "Where it matters most"

THREE CARDS:

┌─────────────────────────────┐
│ 💰 Finance                   │
│ Trading, payments, transfers │
│ • Trade execution           │
│ • Payment processing        │
│ • Wire transfers            │
└─────────────────────────────┘

┌─────────────────────────────┐
│ 💻 Code & DevOps             │
│ CI/CD pipelines, deployments │
│ • Code commits              │
│ • Deployments               │
│ • Infrastructure changes    │
└─────────────────────────────┘

┌─────────────────────────────┐
│ 🏢 Enterprise                │
│ Workflow automation, data ops│
│ • Email campaigns           │
│ • Database updates          │
│ • File access               │
└─────────────────────────────┘
```
- Three-column grid layout
- Check marks for each item
- Green check color (#10B981)

### 7. Final CTA Section
```
BACKGROUND: Blue gradient (left to right)

HEADING (white, large): "Secure your agentic workflows."

SUBHEADING (light blue): "Join leading teams building safe, 
                          observable autonomous agents."

BUTTON: [White button with blue text "Book a Demo"]
```
- Full-width gradient background
- Center-aligned text
- Prominent white CTA button

### 8. Footer
```
© 2025 Voscus. The trust layer for autonomous AI agents.

[Twitter] [GitHub] [Docs]
```
- Light gray background
- Simple links
- Professional tagline

---

## 🎬 Animation Details

### Page Load Animations
- Hero badge: fadeInDown with 0s delay
- Hero title: fadeInUp with 0.1s delay
- Hero subtitle: fadeInUp with 0.2s delay
- CTA buttons: fadeInUp with 0.3s delay

### Timeline Animations
- Each timeline item slides in from left
- Sequential delay: 0.3s between items
- Creates "playback" effect of action sequence

### Hover Effects
- Cards lift up (-8px) on hover
- Smooth cubic-bezier easing
- Box shadow increases on hover
- Border color changes to blue

### Status Indicators
- Executed: Gray, normal opacity
- Executing: Orange, font-weight 600
- Warning: Red, pulsing animation (1s cycle)
- Blocked: Red, fast pulsing (0.6s cycle)

---

## 📱 Responsive Breakpoints

| Screen | Changes |
|--------|---------|
| Mobile (<640px) | Single column, full-width buttons, smaller text |
| Tablet (640-1024px) | Two columns where possible |
| Desktop (>1024px) | Three columns, maximum spacing |

---

## ♿ Accessibility

- All buttons have proper contrast ratios (WCAG AA)
- Icons have alt text where appropriate
- Headings follow proper hierarchy (h1 → h2 → h3)
- Color not the only indicator (icons + text)
- Interactive elements are keyboard accessible
- Font sizes meet minimum requirements (16px+)

---

## 🚀 Performance Optimizations

- Images: Lazy loaded with Next.js Image component
- CSS: Tailwind purges unused styles (~15KB final)
- JavaScript: Code-split per page
- Fonts: Google Fonts CDN, preloaded
- Animations: CSS-based for 60fps performance

