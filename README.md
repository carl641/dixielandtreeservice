# Dixieland Tree Service &mdash; Website

Static HTML/CSS/JS website for Dixieland Tree Service, a specialty large and tall tree removal company serving Huntsville, AL and surrounding North Alabama communities.

## Architecture

Pure static site: hand-written HTML, one shared stylesheet, and minimal JavaScript. No build step, no framework, no CMS. This gives the site a structural performance advantage over WordPress / Wix / Squarespace competitors.

```
/
├── index.html                             Homepage (10-block conversion layout)
├── about.html                             About / credentials / process
├── contact.html                           Free estimate form + contact info
├── gallery.html                           Before/after project gallery
├── reviews.html                           Testimonials + review schema
├── faq.html                               FAQPage schema + 12 top questions
├── blog.html                              Blog hub
├── 404.html                               Branded 404
├── privacy.html / terms.html              Legal
├── robots.txt / sitemap.xml               Technical SEO
├── css/styles.css                         Single stylesheet (mobile-first)
├── js/main.js                             Menu toggle, form, analytics hooks
├── services/
│   ├── index.html                         Services hub
│   ├── tree-removal.html                  Large/tall tree removal (primary)
│   ├── emergency-tree-service.html
│   ├── storm-damage-cleanup.html
│   ├── stump-grinding.html
│   └── tree-trimming.html
├── service-areas/
│   ├── index.html                         Service area hub
│   ├── huntsville-al.html
│   ├── madison-al.html
│   ├── decatur-al.html
│   ├── athens-al.html
│   ├── harvest-al.html
│   ├── meridianville-al.html
│   ├── hampton-cove-al.html
│   ├── owens-cross-roads-al.html
│   ├── hazel-green-al.html
│   ├── toney-al.html
│   ├── new-market-al.html
│   ├── gurley-al.html
│   ├── brownsboro-al.html
│   └── monrovia-al.html
└── blog/
    ├── tree-removal-cost-huntsville.html
    ├── how-to-tell-if-tree-is-dying.html
    ├── neighbor-tree-fell-on-property.html
    ├── preparing-huntsville-trees-tornado-season.html
    └── best-shade-trees-north-alabama.html
```

**Total pages: 32** (hubs counted).

## SEO implementation

Every page ships with:

- Unique `<title>` and `<meta description>` targeting one primary keyword
- Canonical URL
- Open Graph tags (homepage + service pages)
- JSON-LD schema:
  - `Organization` + `WebSite` + `LocalBusiness` on homepage
  - `Service` schema on each service page
  - `LocalBusiness` + `areaServed` on each city page with geo coordinates
  - `FAQPage` on homepage, faq.html, and service pages with FAQs
  - `Article` on blog posts
  - `BreadcrumbList` patterns on inner pages
  - `AggregateRating` + `Review` on reviews page
- Breadcrumbs in visible HTML
- Internal linking between services, service areas, and related blog posts

Sitemap includes all indexable URLs with priorities. `robots.txt` points to the sitemap.

## Business information

Real business info is baked into the HTML, `tel:` links, and JSON-LD schema:

- Business name: Dixieland Tree Service, LLC
- Owner: Robert Norman
- Phone: `(256) 497-8735` / `+12564978735`
- Service area: Huntsville, Madison & Limestone counties, AL
- 30+ years in business, BBB A+ accredited, Google Guaranteed, licensed and insured
- Tagline: "The Remote Controlled Tree Service"

## Remaining pre-launch items

- Email address in footer / contact page (currently `info@dixielandtreeservice.com`)
- Canonical domain: confirm `https://www.dixielandtreeservice.com` vs. `https://dixielandtree.com`
- `images/` folder: add real crew/project photos (currently CSS-rendered placeholders)
- Google Analytics / GTM tag in `<head>` of every page
- Form backend: wire `#estimate-form` to Formspree, Netlify Forms, or your CRM
- `geo` coordinates in LocalBusiness schema (currently downtown Huntsville)

## Local development

No build. Open `index.html` in a browser, or serve with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Deployment

Deploys anywhere that serves static files: Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, Vercel, or a classic shared host. The HTML root is the repo root.

For Netlify, drop the repo in and it just works. Add `_redirects` file if you want clean URLs (drop the `.html`).

## Performance notes

The site is deliberately minimal:

- One CSS file (~17 KB uncompressed)
- One JS file (~2 KB) loaded with `defer`
- No web fonts downloaded (system font stack)
- No third-party scripts by default
- All images should be WebP, lazy-loaded below the fold

Target Core Web Vitals: LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1.

## License

Proprietary. &copy; Dixieland Tree Service.
