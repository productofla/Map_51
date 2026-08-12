export interface Restaurant {
  name: string
  neighborhood: string
  price: string
  openFor: string
  description: string
  insiderTip?: string
  address: string
  phone: string
  lat: number
  lng: number
}

export const ACCENT_COLOR = "#D8232A"

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Etra",
    neighborhood: "Melrose Hill",
    price: "$$$",
    openFor: "Dinner",
    description:
      "Italian spot known for garlic bread, salsa matcha tuna crudo, and spaghetti al limone in a burnt-terracotta dining room.",
    insiderTip:
      "Pull into the driveway for the valet, or it's easy to miss. Parking is also available across the street.",
    address: "737 N Western Ave Ste B, Los Angeles, CA 90029",
    phone: "+1 323 672 8606",
    lat: 34.0836,
    lng: -118.3089,
  },
  {
    name: "Bestia",
    neighborhood: "Arts District",
    price: "$$$",
    openFor: "Dinner",
    description:
      "Industrial-chic Italian from Ori Menashe and Genevieve Gergis — house-made charcuterie, bone marrow, and rustic pastas.",
    insiderTip: "Reservations drop 30 days out at 10 a.m. Walk-ins at the bar are possible early.",
    address: "2121 E 7th Pl, Los Angeles, CA 90021",
    phone: "+1 213 514 5724",
    lat: 34.0339,
    lng: -118.2292,
  },
  {
    name: "Gwen",
    neighborhood: "Hollywood",
    price: "$$$$",
    openFor: "Dinner",
    description:
      "Upscale steakhouse and butcher shop from Curtis Stone — dry-aged beef, seafood, and a polished old-Hollywood dining room.",
    insiderTip: "The butcher counter sells the same cuts you eat in the dining room — great for a picnic.",
    address: "6600 Sunset Blvd, Los Angeles, CA 90028",
    phone: "+1 323 297 1900",
    lat: 34.0982,
    lng: -118.3337,
  },
  {
    name: "Konbi",
    neighborhood: "Echo Park",
    price: "$$",
    openFor: "Lunch, Dinner",
    description:
      "Tiny Japanese sando shop with katsu, egg salad, and seasonal sides — a daytime staple turned evening destination.",
    insiderTip: "The wagyu katsu sando sells out fast. Go early or check Instagram for the day's drop.",
    address: "1133 W Sunset Blvd, Los Angeles, CA 90012",
    phone: "+1 213 265 8828",
    lat: 34.0698,
    lng: -118.2534,
  },
  {
    name: "Holbox",
    neighborhood: "Mercado La Paloma",
    price: "$$",
    openFor: "Lunch, Dinner",
    description:
      "Counter-service seafood from Gilberto Cetina Jr. — ceviches, cocteles, and Yucatán-style tacos in a bustling market hall.",
    insiderTip: "The scallop tostada and smoked fish taco are must-orders. Cash is king at the market.",
    address: "3655 S Grand Ave Ste C9, Los Angeles, CA 90007",
    phone: "+1 213 263 8939",
    lat: 34.0172,
    lng: -118.2789,
  },
]
