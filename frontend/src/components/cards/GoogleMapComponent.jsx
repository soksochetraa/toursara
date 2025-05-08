import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "1100px",
  height: "980px",
  borderRadius: "8px",
};

const defaultCenter = {
  lat: 12.5657,
  lng: 104.991,
};

const GoogleMapComponent = ({ activeDestination }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (activeDestination) {
      setSelectedPlace(activeDestination);
      if (mapRef.current) {
        mapRef.current.panTo({
          lat: activeDestination.lat,
          lng: activeDestination.lng,
        });
      }
    }
  }, [activeDestination]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={13}
        onLoad={onLoad}
      >
        {activeDestination && (
          <Marker
            position={{
              lat: activeDestination.lat,
              lng: activeDestination.lng,
            }}
            icon={{
              url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZjNhNDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWljb24gbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+",
              scaledSize: new window.google.maps.Size(46, 46),
            }}
            onClick={() => setSelectedPlace(activeDestination)}
          />
        )}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.lat,
              lng: selectedPlace.lng,
            }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div className="w-[220px]">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.title}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <h2 className="font-semibold text-[#222] text-base mb-1">
                {selectedPlace.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {selectedPlace.province}
              </p>
              <button
                onClick={() => {
                  const currentPath = window.location.pathname;
                  if (currentPath.startsWith("/explore")) {
                    window.location.href = "/explore/detail";
                  } else if (currentPath.startsWith("/hotel")) {
                    window.location.href = "/hotel/detail";
                  }
                }}
                className="text-[#ef3a45] cursor-pointer font-medium text-sm hover:underline"
              >
                See more.
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
