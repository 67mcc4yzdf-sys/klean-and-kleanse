# Customization Guide

The site is designed so a new cleaning business can be configured primarily in `lib/business.ts`.

## Information to collect

- Business name and short logo text
- City, country, service areas, phone, email, and hours
- Primary and secondary brand colors
- Short tagline and SEO description
- Residential and commercial services offered
- What is included in each service
- Best-fit customer and planning note for each service
- Confirmed trust claims
- Verified reviews, reviewer area, and service used
- FAQs and policies
- Founder or team story
- Facebook, Instagram, or other social links

## Images

Add replacement files to `public/images` and update `business.images`.

- `hero`: horizontal room or cleaner-at-work photo, ideally 1600 x 1200 or larger
- `team`: horizontal candid team photo, ideally 1800 x 1200 or larger
- `before` and `after`: matching dimensions and camera position, ideally 1600 x 900

Use real business photography whenever possible. Do not present generated people as actual employees. Update image alt text in the relevant component if the subject changes significantly.

## Services and quote links

The quote form options are generated from `business.services`. Service-page links pass the selected service to `/contact`, so titles must be unique. Changing a service title in the config updates both the service listing and quote dropdown.

Available service icons:

- `home`
- `sparkles`
- `truck`
- `building`
- `key`
- `hardHat`

## Claims and placeholders

Before launch:

- Remove or replace the template-photo notice after adding a real team image.
- Replace all placeholder reviews with verified customer feedback.
- Add only claims the business has confirmed, such as insured, bonded, eco-friendly, or background checked.
- Connect the quote form to the business email, CRM, or form provider.
- Replace the service-area map placeholder if a map is required.
- Replace generic social links.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

Check the homepage, services, service areas, about, and contact pages at desktop and mobile widths. Test at least one “Ask about this service” link and confirm the cleaning type is preselected.
