/// <reference types="@types/google.maps" />
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState('AIzaSyAR3FnKPBwgVSyOZ3COvo3baeIyD0uzYJc');
  const [mapInitialized, setMapInitialized] = useState(false);

  const initializeMap = async (key: string) => {
    if (!mapContainer.current || mapInitialized) return;

    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        libraries: ['places']
      });

      await loader.load();
      
      map.current = new google.maps.Map(mapContainer.current, {
        mapId: '4b099ec7263d183da25875d2', // Custom styled map
        center: { lat: 49.2827, lng: -123.1207 }, // Vancouver coordinates
        zoom: 9,
      });

      // Create a single merged polygon covering all service areas
      const serviceAreaPolygon = [
        // North Vancouver (northwest)
        { lat: 49.3800, lng: -123.1500 },
        { lat: 49.3800, lng: -123.0000 },
        
        // Coquitlam/Port Moody (northeast)
        { lat: 49.3300, lng: -122.7000 },
        
        // Maple Ridge (east)
        { lat: 49.2700, lng: -122.4500 },
        
        // Abbotsford (far east)
        { lat: 49.0500, lng: -122.2500 },
        
        // Langley/White Rock (southeast - stay at border)
        { lat: 49.0000, lng: -122.5000 },
        { lat: 49.0100, lng: -122.7800 },
        
        // Delta/Tsawwassen (south)
        { lat: 49.0000, lng: -123.1200 },
        
        // Richmond (west)
        { lat: 49.1200, lng: -123.2000 },
        { lat: 49.2000, lng: -123.2200 },
        
        // Vancouver (northwest back to start)
        { lat: 49.3200, lng: -123.2200 }
      ];

      // Create single polygon overlay for entire service area
      const polygon = new google.maps.Polygon({
        paths: serviceAreaPolygon,
        strokeColor: '#10b981',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#10b981',
        fillOpacity: 0.25,
        map: map.current
      });

      // Add hover effect to polygon
      polygon.addListener('mouseover', () => {
        polygon.setOptions({
          fillOpacity: 0.35,
          strokeWeight: 4
        });
      });

      polygon.addListener('mouseout', () => {
        polygon.setOptions({
          fillOpacity: 0.25,
          strokeWeight: 3
        });
      });

      setMapInitialized(true);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
    }
  };

  const handleApiKeySubmit = () => {
    const trimmed = apiKey.trim();
    if (trimmed) {
      localStorage.setItem('googleMapsApiKey', trimmed);
      initializeMap(trimmed);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('googleMapsApiKey');
    if (saved) {
      setApiKey(saved);
      initializeMap(saved);
    } else {
      // Auto-initialize with the provided API key
      initializeMap(apiKey);
    }
  }, []);

  return (
    <div className="relative">
      {!mapInitialized && (
        <div className="absolute inset-0 z-10 bg-background/95 flex items-center justify-center">
          <div className="text-center space-y-4 p-6 bg-card rounded-lg border max-w-md">
            <MapPin className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-semibold text-foreground">Enable Interactive Map</h3>
            <p className="text-sm text-muted-foreground">
              Enter your Google Maps API key to view our service areas on an interactive map.
            </p>
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Google Maps API key (AIza...)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="text-sm"
              />
              <Button onClick={handleApiKeySubmit} className="w-full">
                Load Map
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Get your API key from{' '}
              <a 
                href="https://console.cloud.google.com/apis/credentials" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Cloud Console
              </a>
            </p>
          </div>
        </div>
      )}
      {/* Grid frame around the map */}
      <div className="relative border-4 border-primary/20 rounded-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
        <div 
          ref={mapContainer} 
          className="w-full h-96 rounded"
          style={{ minHeight: '400px' }}
        />
      </div>
    </div>
  );
};

export default InteractiveMap;