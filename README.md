## ScaleLabs Site

Marketing site for `scalelabs.studio`, built with Next.js and exported as a static site for Cloudflare Pages.

## Local development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production build

```bash
npm run build
```

This outputs the deployable static site to `out/`.

## Cloudflare Pages setup

1. Create a Cloudflare Pages project named `scalelabs-studio`.
2. In GitHub repo settings, add these Actions secrets:
3. `CLOUDFLARE_API_TOKEN`
4. `CLOUDFLARE_ACCOUNT_ID`
5. Push to `main`.

The GitHub Actions workflow at `.github/workflows/deploy-pages.yml` will build the app and deploy `out/` to Cloudflare Pages on every push.

## First manual deploy

```bash
npm run build
npm run pages:deploy
```

## Custom domain

In Cloudflare Pages:

1. Open the `scalelabs-studio` project.
2. Go to `Custom domains`.
3. Add `www.scalelabs.studio`.
4. Optionally add `scalelabs.studio` after moving the domain's nameservers to Cloudflare.

## Name.com DNS

If you keep DNS at Name.com, add only the subdomain:

- Type: `CNAME`
- Host: `www`
- Answer/Value: `scalelabs-studio.pages.dev`

If you want the apex domain `scalelabs.studio` to work directly on Cloudflare Pages, Cloudflare's current docs require the domain to be added as a Cloudflare zone and the domain nameservers to be changed from Name.com to the two nameservers Cloudflare assigns your zone. After that, Cloudflare will manage the apex DNS record for Pages.

After the site is live, forward `scalelabs.studio` to `https://www.scalelabs.studio` at either Cloudflare or Name.com if you prefer not to move apex DNS yet.
