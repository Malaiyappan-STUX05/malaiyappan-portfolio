# Malaiyappan S — Cybersecurity Portfolio

A world-class cybersecurity portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js. Designed to impress recruiters within 5 seconds while maintaining the professionalism expected by security engineering hiring managers.

## Live Site

**https://malaiyappan.dev** *(deploy and add your domain)*

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS |
| UI Animations | Framer Motion |
| Scroll Animations | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis |
| 3D Graphics | Three.js + React Three Fiber + Drei |
| Forms | React Hook Form + Zod |
| Content | MDX (for research articles) |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Project Structure

```
malaiyappan-portfolio/
├── content/research/          # MDX research articles
├── public/                    # Static assets (resume PDF, images, favicon)
│   ├── images/
│   │   ├── avatar/            # Profile photo
│   │   ├── projects/          # Project screenshots & diagrams
│   │   └── certs/             # Certification logos
│   └── resume.pdf             # Downloadable resume
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout (fonts, metadata, nav, footer)
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles + design system
│   │   ├── about/page.tsx     # About page
│   │   ├── projects/
│   │   │   ├── page.tsx       # Projects index
│   │   │   └── [slug]/page.tsx # Dynamic project detail page
│   │   ├── research/
│   │   │   ├── page.tsx       # Research index
│   │   │   └── [slug]/page.tsx # Dynamic article page
│   │   ├── resume/page.tsx    # Resume page
│   │   ├── not-found.tsx      # 404 page
│   │   ├── loading.tsx        # Root loading state
│   │   └── api/contact/route.ts # Contact form API
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, MobileMenu
│   │   ├── ui/                # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── SkillTag.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   ├── GradientOrb.tsx
│   │   │   ├── GridBackground.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   └── ScreenshotGallery.tsx
│   │   ├── sections/          # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── ResearchContributions.tsx
│   │   │   ├── ResearchWriteups.tsx
│   │   │   ├── Resume.tsx
│   │   │   └── Contact.tsx
│   │   ├── project/           # Project detail page components
│   │   │   ├── ProjectHero.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── ProjectContent.tsx
│   │   │   ├── ArchitectureDiagram.tsx
│   │   │   ├── TechStackList.tsx
│   │   │   └── ProjectNavigation.tsx
│   │   ├── research/          # Research/blog components
│   │   │   ├── ResearchCard.tsx
│   │   │   ├── ResearchFilter.tsx
│   │   │   ├── ArticleContent.tsx
│   │   │   └── TableOfContents.tsx
│   │   └── three/             # Three.js 3D components
│   │       ├── HeroScene.tsx
│   │       ├── SceneProvider.tsx
│   │       ├── ParticleField.tsx
│   │       ├── CyberGlobe.tsx
│   │       └── ThreeFallback.tsx
│   ├── data/                  # ← ALL EDITABLE CONTENT LIVES HERE
│   │   ├── profile.ts         # Name, bio, role, education
│   │   ├── socials.ts         # Email, LinkedIn, GitHub
│   │   ├── skills.ts          # Skills by category + proficiency
│   │   ├── experience.ts      # Work experience timeline
│   │   ├── certifications.ts  # Certifications with issuer + date
│   │   ├── projects.ts        # All project data (used by homepage + detail pages)
│   │   ├── research.ts        # Research contributions + articles
│   │   └── site.ts            # Site config, nav, footer, SEO keywords
│   ├── types/                 # TypeScript interfaces
│   │   └── index.ts
│   ├── lib/                   # Utilities
│   │   ├── data.ts            # Data access helpers
│   │   ├── mdx.ts             # MDX file processing
│   │   ├── seo.ts             # Metadata + JSON-LD generation
│   │   └── utils.ts           # General utilities
│   └── hooks/                 # Custom React hooks
│       ├── useReducedMotion.ts
│       ├── useMousePosition.ts
│       ├── useScrollProgress.ts
│       └── useMediaQuery.ts
└── config/
    └── site.ts
```

## Design System

### Colors
| Role | Color | Hex |
|---|---|---|
| Primary | Cyber Cyan | `#00F0FF` |
| Primary Dark | Deep Teal | `#00C4D4` |
| Accent | Threat Red | `#FF2D55` |
| BG Primary | Void Black | `#0A0A0F` |
| BG Secondary | Deep Space | `#12121A` |
| Text Primary | Ghost White | `#E8E8F0` |
| Text Secondary | Silver Mist | `#9A9AAA` |

### Typography
- **Display/Headings:** Inter (Black/ExtraBold)
- **Body:** Inter (Regular/Medium)
- **Code:** JetBrains Mono

### Effects
- Glass morphism (frosted card backgrounds)
- Cyan glow shadows on interactive elements
- Subtle grid pattern overlays
- Optional 3D particle field (hero section)

## How To Update Content

### Add a New Project
1. Add a new object to the `projects` array in `src/data/projects.ts`
2. That's it. The homepage and projects index update automatically.

### Add a New Certification
1. Add a new object to the `certifications` array in `src/data/certifications.ts`
2. Set `featured: true` to highlight it near the hero section.

### Add a New Skill
1. Add a skill entry to the appropriate category in `src/data/skills.ts`
2. Use one of three levels: `'advanced'`, `'intermediate'`, `'working-knowledge'`

### Add a New Experience
1. Add a new object to the `experiences` array in `src/data/experience.ts`
2. Set `endDate: null` for current positions.

### Add a Research Article
1. Create an `.mdx` file in `content/research/`
2. Add frontmatter (title, summary, category, tags, date, status)
3. Write your article content in Markdown/MDX
4. Add a reference in `src/data/research.ts` (optional — MDX files are auto-discovered)

### Update Profile Info
Edit `src/data/profile.ts` — name, bio, education, avatar path, resume URL.

### Update Social Links
Edit `src/data/socials.ts` — email, LinkedIn, GitHub.

## Getting Started

### Prerequisites
- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Malaiyappan-STUX05/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment template
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/Malaiyappan-STUX05/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework preset: **Next.js** (auto-detected)
   - Build command: `next build` (default)
   - Output directory: `.next` (default)
   - Click "Deploy"

3. **Add Environment Variables** (in Vercel dashboard):
   - `NEXT_PUBLIC_SITE_URL` → `https://your-domain.com`

4. **Add Custom Domain** (optional):
   - In Vercel dashboard → Project Settings → Domains
   - Add `malaiyappan.dev` (or your preferred domain)
   - Update DNS records as instructed

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Check all external links (LinkedIn, GitHub)
- [ ] Upload `resume.pdf` to `/public/`
- [ ] Add profile photo to `/public/images/avatar/`
- [ ] Add project screenshots to `/public/images/projects/`
- [ ] Add certification logos to `/public/images/certs/`
- [ ] Create OG image (1200×630) and save as `/public/og-image.png`
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form (integrate Resend/SendGrid for production)
- [ ] Enable Vercel Analytics in dashboard

## Performance Targets

| Metric | Target |
|---|---|
| First Contentful Paint (FCP) | < 1.0s |
| Largest Contentful Paint (LCP) | < 2.0s |
| Cumulative Layout Shift (CLS) | < 0.05 |
| Lighthouse Performance | > 90 |

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 throughout
- Keyboard navigation support
- `prefers-reduced-motion` respected (3D scene disabled, animations reduced)
- Focus visible states on all interactive elements
- Color contrast ratios meet 4.5:1 minimum

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## License

MIT License — feel free to use this as a reference for your own portfolio.

## Contact

- **Email:** malaiyappan.official@gmail.com
- **LinkedIn:** [linkedin.com/in/malaiyappanssecurityprofessional](https://www.linkedin.com/in/malaiyappanssecurityprofessional/)
- **GitHub:** [github.com/Malaiyappan-STUX05](https://github.com/Malaiyappan-STUX05)
