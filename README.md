# Map 51 — LA Restaurant Map

An Eater-style restaurant guide with a split-panel layout: restaurant details and a numbered list on the left, an interactive Google Map on the right.

## Quick start

```bash
npm install
cp .env.example .env
# Add your Google Maps API key to .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Google Maps API key

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/).
2. Enable **Maps JavaScript API** and **Places API** (photos in the map popup come from Google Places).
3. Create an API key and restrict it to your domain (or `localhost` for dev).
4. Set `VITE_GOOGLE_MAPS_API_KEY=your_key_here` in `.env`.

## Customize restaurants

Edit `src/data/restaurants.ts` — each entry needs name, neighborhood, price, hours, description, address, phone, and lat/lng coordinates.

## Deploy on Vercel

This repo is ready for Vercel. The app is a static Vite build — no server needed.

### 1. Import the repo

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub if you haven't already
3. Import **productofla/Map_51**
4. Vercel should auto-detect **Vite** with:
   - Build command: `npm run build`
   - Output directory: `dist`

### 2. Add your Google Maps API key

Before deploying, open **Environment Variables** and add:

| Name | Value |
|------|-------|
| `VITE_GOOGLE_MAPS_API_KEY` | your Google Maps API key |

Add it for **Production**, **Preview**, and **Development** so the map works everywhere.

Then click **Deploy**.

### 3. Restrict the API key to your domain

After the first deploy, Vercel gives you a URL like `map-51.vercel.app`. In [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials → your key → **Application restrictions**:

- Choose **HTTP referrers**
- Add:
  - `http://localhost:5173/*` (local dev)
  - `https://*.vercel.app/*` (Vercel previews + production)
  - `https://your-custom-domain.com/*` (if you add one later)

### 4. Redeploy after adding the env var

If you already deployed without the key, go to **Deployments** → the latest deploy → **⋯** → **Redeploy** so the build picks up `VITE_GOOGLE_MAPS_API_KEY`.

### Optional: deploy from the CLI

```bash
npm i -g vercel
cd Map_51
vercel
vercel env add VITE_GOOGLE_MAPS_API_KEY
vercel --prod
```
