/// <reference types="@types/google.maps" />
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// This uses the site's ORIGINAL Google Maps key so the corrected map can go
// live now. LATER, when you create your own restricted key:
//   1. Replace the key below with your new one.
//   2. Delete the `mapId` line further down (it's tied to the old key's
//      project and will break with a new key).
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_MAPS_API_KEY = 'AIzaSyAR3FnKPBwgVSyOZ3COvo3baeIyD0uzYJc';

// Integra Tree Service — confirmed service area boundary.
// Covers: Surrey, South Surrey, White Rock, Ocean Park, Tsawwassen, Delta,
// Langley, Coquitlam, Port Coquitlam.
// Deliberately excludes: Vancouver, Burnaby, Richmond, North/West Vancouver,
// Maple Ridge / Pitt Meadows, Abbotsford.
const SERVICE_AREA_POLYGON: google.maps.LatLngLiteral[] = [
  { lat: 49.29, lng: -122.87 }, // Coquitlam — west edge (east of the Burnaby border)
  { lat: 49.3, lng: -122.76 }, // Coquitlam — north
  { lat: 49.27, lng: -122.7 }, // Port Coquitlam — east edge at the Pitt River
  { lat: 49.19, lng: -122.62 }, // across the Fraser to Walnut Grove / Fort Langley
  { lat: 49.16, lng: -122.48 }, // Langley Township — east edge (Aldergrove side)
  { lat: 49.005, lng: -122.47 }, // Langley at the US border
  { lat: 49.005, lng: -122.8 }, // White Rock / South Surrey / Ocean Park
  { lat: 49.0, lng: -123.09 }, // Tsawwassen — south tip
  { lat: 49.03, lng: -123.15 }, // Tsawwassen — ferry terminal side
  { lat: 49.1, lng: -123.1 }, // Ladner / west Delta (staying south of Richmond)
  { lat: 49.17, lng: -122.96 }, // North Delta at the Fraser River
  { lat: 49.215, lng: -122.9 }, // North Surrey (Whalley) — toward the Port Mann
];

const SERVICE_AREAS = [
  'Surrey',
  'South Surrey',
  'White Rock',
  'Ocean Park',
  'Tsawwassen',
  'Delta',
  'Langley',
  'Coquitlam',
  'Port Coquitlam',
];

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const initialized = useRef(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    const initializeMap = async () => {
      if (!mapContainer.current || initialized.current) return;

      try {
        const loader = new Loader({
          apiKey: GOOGLE_MAPS_API_KEY,
          version: 'weekly',
        });

        await loader.load();
        if (cancelled || !mapContainer.current) return;
        initialized.current = true;

        map.current = new google.maps.Map(mapContainer.current, {
          mapId: '4b099ec7263d183da25875d2', // Custom style — tied to the current key's project. DELETE this line when you switch to your own key.
          center: { lat: 49.13, lng: -122.82 }, // Surrey — heart of the service area
          zoom: 10,
        });

        // Single polygon overlay for the entire service area
        const polygon = new google.maps.Polygon({
          paths: SERVICE_AREA_POLYGON,
          strokeColor: '#10b981',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#10b981',
          fillOpacity: 0.25,
          map: map.current,
        });

        // Hover effect
        polygon.addListener('mouseover', () => {
          polygon.setOptions({ fillOpacity: 0.35, strokeWeight: 4 });
        });

        polygon.addListener('mouseout', () => {
          polygon.setOptions({ fillOpacity: 0.25, strokeWeight: 3 });
        });

        setStatus('ready');
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        if (!cancelled) setStatus('error');
      }
    };

    initializeMap();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative">
      {status !== 'ready' && (
        <div className="absolute inset-0 z-10 bg-background/95 flex items-center justify-center">
          <div className="text-center space-y-3 p-6 bg-card rounded-lg border max-w-md">
            <MapPin className="h-12 w-12 text-primary mx-auto" />
            {status === 'loading' ? (
              <p className="text-sm text-muted-foreground">Loading service area map…</p>
            ) : (
              <>
                <h3 className="font-semibold text-foreground">Our Service Areas</h3>
                <p className="text-sm text-muted-foreground">{SERVICE_AREAS.join(' · ')}</p>
              </>
            )}
          </div>
        </div>
      )}
      {/* Grid frame around the map */}
      <div className="relative border-4 border-primary/20 rounded-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
              `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        </div>
        <div ref={mapContainer} className="w-full h-96 rounded" style={{ minHeight: '400px' }} />
      </div>
    </div>
  );
};

export default InteractiveMap;
