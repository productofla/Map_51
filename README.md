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
2. Enable **Maps JavaScript API**.
3. Create an API key and restrict it to your domain (or `localhost` for dev).
4. Set `VITE_GOOGLE_MAPS_API_KEY=your_key_here` in `.env`.

## Customize restaurants

Edit `src/data/restaurants.ts` — each entry needs name, neighborhood, price, hours, description, address, phone, and lat/lng coordinates.

## Deploy

```bash
npm run build
```

Deploy the `dist` folder to Vercel, Netlify, or any static host. Add `VITE_GOOGLE_MAPS_API_KEY` as an environment variable in your hosting dashboard.
