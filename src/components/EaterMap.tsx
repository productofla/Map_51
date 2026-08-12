import { useEffect, useRef, useState } from "react"
import type { Restaurant } from "../data/restaurants"
import styles from "./EaterMap.module.css"

interface EaterMapProps {
  apiKey: string
  restaurants: Restaurant[]
  accentColor: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) return resolve()

    const existing = document.getElementById("gmaps-script")
    if (existing) {
      existing.addEventListener("load", () => resolve())
      return
    }

    const script = document.createElement("script")
    script.id = "gmaps-script"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = reject
    document.head.appendChild(script)
  })
}

function pinIcon(selected: boolean, accentColor: string): google.maps.Icon {
  const g = window.google!
  const svg = selected
    ? `<svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg"><path d="M17 2c9 0 15 7 15 15 0 12-15 27-15 27S2 29 2 17C2 9 8 2 17 2Z" fill="${accentColor}" stroke="white" stroke-width="2"/><circle cx="17" cy="17" r="6" fill="white"/></svg>`
    : `<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" fill="white" stroke="${accentColor}" stroke-width="3"/></svg>`

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: selected ? new g.maps.Size(34, 46) : new g.maps.Size(22, 22),
    anchor: selected ? new g.maps.Point(17, 44) : new g.maps.Point(11, 11),
  }
}

function buildInfoWindowContent(
  restaurant: Restaurant,
  apiKey: string,
  accentColor: string,
): string {
  const query = encodeURIComponent(
    `${restaurant.name}, ${restaurant.address || `${restaurant.lat},${restaurant.lng}`}`,
  )
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=17`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.lat},${restaurant.lng}`

  return `
    <div class="map-info-window">
      <div class="map-info-title" style="color:${accentColor}">${escapeHtml(restaurant.name)}</div>
      <div class="map-info-meta">${escapeHtml(restaurant.neighborhood)} · ${escapeHtml(restaurant.price)}</div>
      <iframe
        class="map-info-embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="${embedUrl}"
        title="${escapeHtml(restaurant.name)} on Google Maps"
      ></iframe>
      <a class="map-info-link" style="color:${accentColor}" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">
        Open in Google Maps →
      </a>
    </div>
  `
}

export function EaterMap({ apiKey, restaurants, accentColor }: EaterMapProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const listRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    let cancelled = false
    if (!apiKey || restaurants.length === 0) return

    loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled || !mapRef.current) return

        const g = window.google!
        mapInstance.current = new g.maps.Map(mapRef.current, {
          center: {
            lat: restaurants[0]?.lat ?? 34.05,
            lng: restaurants[0]?.lng ?? -118.24,
          },
          zoom: 16,
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] },
          ],
        })

        infoWindowRef.current = new g.maps.InfoWindow({
          pixelOffset: new g.maps.Size(0, -4),
        })

        markersRef.current = restaurants.map((r, i) => {
          const marker = new g.maps.Marker({
            position: { lat: r.lat, lng: r.lng },
            map: mapInstance.current!,
            icon: pinIcon(i === selectedIndex, accentColor),
            title: r.name,
          })
          marker.addListener("click", () => setSelectedIndex(i))
          return marker
        })
      })
      .catch(() => {
        /* script load failure handled by overlay */
      })

    return () => {
      cancelled = true
      infoWindowRef.current?.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey, JSON.stringify(restaurants)])

  useEffect(() => {
    markersRef.current.forEach((marker, i) => {
      marker.setIcon(pinIcon(i === selectedIndex, accentColor))
    })

    const r = restaurants[selectedIndex]
    const marker = markersRef.current[selectedIndex]

    if (r && mapInstance.current) {
      mapInstance.current.panTo({ lat: r.lat, lng: r.lng })
    }

    if (r && marker && mapInstance.current && infoWindowRef.current && apiKey) {
      infoWindowRef.current.setContent(
        buildInfoWindowContent(r, apiKey, accentColor),
      )
      infoWindowRef.current.open({
        map: mapInstance.current,
        anchor: marker,
      })
    }

    listRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }, [selectedIndex, accentColor, restaurants, apiKey])

  const selected = restaurants[selectedIndex]

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <header className={styles.header}>
          <div
            className={styles.accentBar}
            style={{ background: accentColor }}
          />
          <p className={styles.kicker}>Chinatown</p>
          <h1 className={styles.headline}>Where to eat right now</h1>
        </header>

        {selected ? (
          <article className={styles.detail} key={selected.name}>
            <h2 className={styles.restaurantName}>{selected.name}</h2>
            <p className={styles.meta}>
              <span>{selected.neighborhood}</span>
              <span aria-hidden="true"> · </span>
              <span>{selected.price}</span>
            </p>
            <p className={styles.field}>
              <strong>Open for:</strong> {selected.openFor}
            </p>
            <p className={styles.description}>{selected.description}</p>
            {selected.insiderTip ? (
              <p className={styles.tip}>
                <strong>Insider tip:</strong> {selected.insiderTip}
              </p>
            ) : null}
            <div className={styles.contact}>
              <p>{selected.address}</p>
              {selected.phone ? (
                <a href={`tel:${selected.phone.replace(/\s/g, "")}`}>
                  {selected.phone}
                </a>
              ) : null}
            </div>
          </article>
        ) : null}

        <nav className={styles.list} aria-label="Restaurant list">
          {restaurants.map((r, i) => (
            <button
              key={`${r.name}-${i}`}
              type="button"
              ref={(el) => {
                listRefs.current[i] = el
              }}
              onClick={() => setSelectedIndex(i)}
              className={
                i === selectedIndex
                  ? `${styles.listItem} ${styles.listItemActive}`
                  : styles.listItem
              }
              style={
                i === selectedIndex ? { color: accentColor } : undefined
              }
              aria-current={i === selectedIndex ? "true" : undefined}
            >
              <span className={styles.listNumber}>{i + 1}.</span>
              <span>
                {r.name}
                <span className={styles.listNeighborhood}>
                  {r.neighborhood}
                </span>
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <div className={styles.mapWrap}>
        <div ref={mapRef} className={styles.map} role="presentation" />
        {!apiKey ? (
          <div className={styles.mapPlaceholder}>
            <p>
              Add your Google Maps API key to{" "}
              <code>.env</code> as <code>VITE_GOOGLE_MAPS_API_KEY</code>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
