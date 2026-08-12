import { EaterMap } from "./components/EaterMap"
import { ACCENT_COLOR, RESTAURANTS } from "./data/restaurants"

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""

export default function App() {
  return (
    <EaterMap
      apiKey={apiKey}
      restaurants={RESTAURANTS}
      accentColor={ACCENT_COLOR}
    />
  )
}
