export interface Restaurant {
  name: string
  neighborhood: string
  establishmentType: string
  price: string
  openFor: string
  description: string
  insiderTip?: string
  address: string
  phone: string
  lat: number
  lng: number
  /** Google Place ID — optional, helps load the right photo */
  placeId?: string
  /** Manual photo URL — optional, skips Google lookup if set */
  photoUrl?: string
  /** Direct Google Maps URL for this place — optional */
  googleMapsUrl?: string
}

export const ACCENT_COLOR = "#D8232A"

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Damnoen Saduak (DS) Night Market",
    neighborhood: "Chinatown",
    establishmentType: "Night market",
    price: "$",
    openFor: "Fri–Sat 5–11pm, Sun 4–10pm",
    description:
      "Weekend Thai and international street food market at Chinatown Central Plaza — grilled skewers, boat noodles, live music, and karaoke under the lanterns.",
    insiderTip:
      "Take the Metro A Line to Chinatown Station and walk over. Street parking is free after 6–8pm.",
    address: "932 Mei Ling Way, Los Angeles, CA 90012",
    phone: "",
    lat: 34.064976,
    lng: -118.237872,
    googleMapsUrl:
      "https://www.google.com/maps/place/Damnoen+Saduak+(DS)+Night+Market/@34.064976,-118.237872,17z",
  },
  {
    name: "Melody Lounge",
    neighborhood: "Chinatown",
    establishmentType: "Dive bar",
    price: "$$",
    openFor: "Daily 5pm–2am",
    description:
      "Chinatown's craft beer destination with 24 taps, seasonal cocktails, and a low-key lounge vibe that's been a neighborhood staple for years.",
    insiderTip: "Ask the bartender for a dealer's choice cocktail — they're great at reading the room.",
    address: "939 N Hill St, Los Angeles, CA 90012",
    phone: "+1 213 625 2823",
    lat: 34.0656168,
    lng: -118.2383298,
    googleMapsUrl:
      "https://www.google.com/maps/place/Melody+Lounge/@34.0656168,-118.2383298,17z",
  },
  {
    name: "Café Triste",
    neighborhood: "Chinatown",
    establishmentType: "Wine bar",
    price: "$$",
    openFor: "Wed–Sun, evening",
    description:
      "Natural wine bar from the Psychic Wines team, tucked inside Mandarin Plaza with small plates, glass-block interiors, and a see-and-be-seen weekend crowd.",
    insiderTip: "Walk-ins are welcome for drinks only — reserve if you're planning to eat.",
    address: "980 N Broadway, Los Angeles, CA 90012",
    phone: "+1 213 278 0820",
    lat: 34.0663681,
    lng: -118.2359281,
    googleMapsUrl:
      "https://www.google.com/maps/place/CAF%C3%89+TRISTE/@34.0663681,-118.2359281,17z",
  },
  {
    name: "Evangeline Swamp Room",
    neighborhood: "Chinatown",
    establishmentType: "Bar & restaurant",
    price: "$$",
    openFor: "Wed–Sun, evening",
    description:
      "New Orleans–inspired cocktail bar from the Little Jewel team — Sazeracs, Hurricanes, charbroiled oysters, and fried bar bites in a French Quarter mood.",
    insiderTip: "Pair a cocktail with the crawfish mac and cheese if the kitchen is open.",
    address: "701 N Spring St, Los Angeles, CA 90012",
    phone: "+1 213 620 0461",
    lat: 34.0600433,
    lng: -118.2379737,
    googleMapsUrl:
      "https://www.google.com/maps/place/Evangeline+Swamp+Room/@34.0600433,-118.2379737,17z",
  },
  {
    name: "Chinatown Station",
    neighborhood: "Chinatown",
    establishmentType: "Metro station",
    price: "—",
    openFor: "Daily",
    description:
      "Metro A Line stop at the edge of Chinatown Central Plaza — the easiest way in without hunting for parking.",
    insiderTip: "Tap off here for DS Night Market, Central Plaza, and the walkable bar cluster on Hill and Broadway.",
    address: "901 N Broadway, Los Angeles, CA 90012",
    phone: "",
    lat: 34.0639297,
    lng: -118.2359236,
    googleMapsUrl:
      "https://www.google.com/maps/place/Chinatown+Station/@34.0639297,-118.2359236,17z",
  },
  {
    name: "Big Chungus Statue",
    neighborhood: "Chinatown",
    establishmentType: "Landmark",
    price: "—",
    openFor: "Always",
    description:
      "Giant meme statue planted near Central Plaza — a photo-op detour between stops on the night market crawl.",
    insiderTip: "Best visited while everything nearby is lit up on a weekend night.",
    address: "Chinatown Central Plaza, Los Angeles, CA 90012",
    phone: "",
    lat: 34.0635423,
    lng: -118.2362604,
    googleMapsUrl:
      "https://www.google.com/maps/place/Big+Chungus+Statue/@34.0635423,-118.2362604,17z",
  },
]
