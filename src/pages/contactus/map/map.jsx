import React, { useState, useEffect } from 'react';

export const MapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Google Maps API kalit so'zi
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

    // Google Maps API-ni yuklash
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    // Xarita boshlang'ich holatini sozlash va joylashuvi
    const initMap = () => {
      const mapOptions = {
        center: { lat: 41.8781, lng: -87.6298 }, // Chicago koordinatalari (o'zgartiring)
        zoom: 12, // Xarita zoom darajasi
      };

      const mapInstance = new window.google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );

      setMap(mapInstance);
    };

    // Google Maps API-ni yuklash
    loadGoogleMapsScript();
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
    />
  );
};

