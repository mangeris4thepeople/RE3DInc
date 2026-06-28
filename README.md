# Re3d Inc — re3dinc.com

Custom print-on-demand clothing website. Design your own or shop thousands of independent artist creations.

## File Structure

```
re3dinc/
├── index.html          ← Main homepage
├── thankyou.html       ← Post-form submission redirect
├── favicon.ico         ← Multi-size favicon (16–256px)
├── favicon.svg         ← SVG favicon (modern browsers)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Nav, wishlist, modal, scroll behavior
├── images/             ← Drop product images here
└── fonts/              ← Local fonts if needed
```

## Form Submissions

Registration and newsletter forms submit to **dustinreed591@gmail.com** via [FormSubmit](https://formsubmit.co).

- No backend required
- First submission will trigger a one-time confirmation email from FormSubmit
- After confirming, all submissions go straight to the inbox

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/re3dinc/`

## Custom Domain (re3dinc.com)

1. In your repo root, create a file named `CNAME` containing:
   ```
   re3dinc.com
   ```
2. In your DNS provider, add:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` record: `www` → `yourusername.github.io`

## Fonts

- **Syne** (display/headings) — loaded from Google Fonts
- **Inter** (body) — loaded from Google Fonts

## Brand Colors

| Name       | Hex       | Usage                  |
|------------|-----------|------------------------|
| Gold       | `#c8860a` | Primary accent, CTAs   |
| Gold Light | `#ffd700` | Shimmer, highlights    |
| Ink        | `#0f0f0f` | Text, dark sections    |
| Paper      | `#f7f6f2` | Page background        |
| Punch Red  | `#e84c2b` | Sale badges            |
| Sage       | `#3a6b4a` | New/Eco badges         |

## Next Steps

- [ ] Connect a real payment processor (Stripe, Shopify)
- [ ] Add product detail pages
- [ ] Build out the Design Studio canvas
- [ ] Add artist seller dashboard
- [ ] Connect inventory/POD API (Printful, Printify)
