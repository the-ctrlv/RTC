# Rope Tech Group - Project Documentation

## 📚 Complete Architecture Overview

This document provides detailed information about the project structure, patterns, and best practices.

## 🏗️ Architecture Decisions

### Why This Stack?

- **React 19**: Latest features, improved performance
- **TypeScript**: Type safety, better developer experience
- **Tailwind CSS**: Utility-first, rapid development
- **Vite**: Fast builds, excellent DX

### Design Patterns

1. **Component Composition**: Small, reusable components
2. **Container/Presentational**: Separation of logic and UI
3. **Custom Hooks**: Shared logic extraction
4. **Centralized Data**: Single source of truth

## 📂 Detailed File Structure

```
src/
├── components/
│   ├── common/              # Shared across pages
│   │   ├── PageHero.tsx     # Hero sections
│   │   └── CTASection.tsx   # Call-to-action blocks
│   ├── home/                # Homepage specific
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── CTASection.tsx
│   ├── layout/              # App layout
│   │   ├── Header.tsx       # Navigation
│   │   ├── Footer.tsx       # Footer
│   │   └── Layout.tsx       # Wrapper
│   └── ui/                  # Base components
│       └── button.tsx
├── pages/                   # Route components
│   ├── Home.tsx
│   ├── AboutUs.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx    # Dynamic service pages
│   ├── Industries.tsx
│   ├── Projects.tsx
│   └── ContactUs.tsx
├── lib/                     # Utilities
│   ├── constants.ts         # Style constants
│   ├── data.ts              # Company data
│   ├── images.ts            # Image URLs
│   └── utils.ts             # Helper functions
├── types/                   # TypeScript types
│   └── index.ts
├── hooks/                   # Custom hooks
│   └── useMediaQuery.ts
└── assets/                  # Static files
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Brand Lime | #D9F043 | Primary actions, highlights |
| Brand Dark | #2D2D2D | Backgrounds, footers |
| Brand Dark Light | #3D3D3D | Cards, sections |
| Brand Dark Lighter | #454545 | Hover states |
| Brand Gray | #F5F5F5 | Light backgrounds |

### Spacing Scale

- **Section Padding**: `py-16 sm:py-20 lg:py-24`
- **Container**: `container mx-auto px-4 sm:px-6 lg:px-8`
- **Card Padding**: `p-6 lg:p-8` or `p-8 lg:p-10`

### Typography Scale

```ts
HEADING_XL = "text-4xl sm:text-5xl lg:text-6xl font-bold"
HEADING_LG = "text-3xl lg:text-5xl font-bold"
HEADING_MD = "text-2xl lg:text-4xl font-bold"
HEADING_SM = "text-xl lg:text-2xl font-bold"
```

### Border Radius

```ts
CARD_ROUNDED = "rounded-3xl"     // Large cards
CARD_ROUNDED_MD = "rounded-2xl"  // Medium cards
CARD_ROUNDED_SM = "rounded-xl"   // Small cards
```

## 🧩 Component Patterns

### Page Structure

Every page should follow this pattern:

```tsx
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/common/CTASection";

const PageName = () => {
  return (
    <div className="min-h-screen">
      <SEO title="Page Title" description="..." />
      <PageHero title="Page Title" />
      {/* Page content */}
      <CTASection title="Ready to Discuss Your Project?" />
    </div>
  );
};
```

### Section Pattern

```tsx
<section className="py-16 sm:py-20 lg:py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
    <div className="max-w-6xl mx-auto">
      {/* Section content */}
    </div>
  </div>
</section>
```

## 🔌 Custom Hooks Usage

### useMediaQuery

```tsx
import { useIsMobile, useIsDesktop } from "@/hooks/useMediaQuery";

const Component = () => {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  return isMobile ? <MobileView /> : <DesktopView />;
};
```

## 📝 Data Management

### Images

All images are centralized in `lib/images.ts`:

```tsx
import { IMAGES, PROJECT_IMAGES } from "@/lib/images";

<img src={IMAGES.ropeAccessWorker1} alt="..." />
<img src={PROJECT_IMAGES.industrial} alt="..." />
```

### Company Data

Contact info and navigation in `lib/data.ts`:

```tsx
import { CONTACT_INFO, NAV_ITEMS } from "@/lib/data";

const email = CONTACT_INFO.email;
const nav = NAV_ITEMS.map(item => ...);
```

## 🎯 SEO Best Practices

1. **Unique Titles**: Each page has unique title
2. **Meta Descriptions**: 150-160 characters
3. **Open Graph**: Social sharing optimization
4. **Keywords**: Relevant, comma-separated
5. **Semantic HTML**: Proper heading hierarchy

Example:

```tsx
<SEO
  title="Rope Access Services"
  description="Professional rope access services in Vancouver..."
  keywords="rope access, building maintenance, Vancouver"
  ogImage="/path/to/image.jpg"
  ogUrl="https://ropetechgroup.com/services"
/>
```

## 🚀 Performance Optimizations

1. **Code Splitting**: Route-based lazy loading
2. **Image Optimization**: Proper formats and sizes
3. **CSS Purging**: Tailwind removes unused styles
4. **Bundle Size**: Tree-shaking with Vite

## 🧪 Testing Guidelines

### Component Testing

```tsx
// Test component rendering
// Test user interactions
// Test responsive behavior
// Test accessibility
```

## 📦 Deployment

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Environment Variables

Create `.env` file:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info.ropetechgroup@gmail.com
```

## 🔄 Version Control

### Commit Convention

```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes
refactor: Code refactoring
perf: Performance improvements
test: Adding tests
chore: Build process or auxiliary tool changes
```

## 📞 Support

For questions or issues:
- Email: info.ropetechgroup@gmail.com
- GitHub: Create an issue

---

Last updated: December 2025
