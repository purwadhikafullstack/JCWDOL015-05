'use client'
import maplibregl from 'maplibre-gl';
import { useState } from 'react';

type MapType = {
  lng: number
  lat: number
}
export const MapInitialize = (
  lng: number,
  lat: number,
  ref: any,
  zoom: number,
) => {
  const [map, setMap] = useState<maplibregl.Map | null>(null)
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number } | null>(null)
  const [showDialog, setShowDialog] = useState(false)
  const [marker, setMarker] = useState<maplibregl.Marker | null>(null)

  const MAP_API = process.env.NEXT_PUBLIC_MAPTILER_API_KEY
  const initMap = () => {
    const mapModel = new maplibregl.Map({
      container: ref.current!,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAP_API}`,
      center: [lng, lat],
      zoom: zoom
    })
    setMap(mapModel)
    mapModel.addControl(new maplibregl.NavigationControl(), 'top-right')

    const mapClick = (e: maplibregl.MapMouseEvent) => {
      const { lng, lat } = e.lngLat
      const newMarker = new maplibregl.Marker({})
        .setLngLat([lng, lat])
      setCoordinates({ lng, lat })
      setShowDialog(true)
    }
    if (marker?._lngLat === undefined) {
      mapModel.on('click', mapClick)
    } else {
      mapModel.off('click', mapClick)
    }
    const outletMarker = new maplibregl.Marker()
      .setLngLat([114.30458613942182, -8.40892188532409])
      .addTo(mapModel)
  }
  return {}
}