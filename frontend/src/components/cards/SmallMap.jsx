import React, { useState, useRef, useMemo } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "545px",
  height: "700px",
};

const ruppLocation = {
  lat: 11.568271,
  lng: 104.888481,
  title: "Royal University of Phnom Penh (RUPP)",
  province: "Phnom Penh, Cambodia",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Royal_University_of_Phnom_Penh.jpg/500px-Royal_University_of_Phnom_Penh.jpg",
};

const SmallMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(ruppLocation);
  const mapRef = useRef(null);

  const markerIcon = useMemo(() => {
    if (window.google && window.google.maps) {
      return {
        url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZjNhNDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWljb24gbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+",
        scaledSize: new window.google.maps.Size(46, 46),
      };
    }
    return null;
  }, [window.google]);

  const onLoad = (map) => {
    mapRef.current = map;
    map.panTo(ruppLocation);
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ruppLocation}
        zoom={15}
        onLoad={onLoad}
      >
        <Marker
          position={{ lat: ruppLocation.lat, lng: ruppLocation.lng }}
          icon={markerIcon}
          onClick={() => setSelectedPlace(ruppLocation)}
        />

        {selectedPlace && (
          <InfoWindow
            position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div className="w-[220px]">
              <img
                src={selectedPlace.imageUrl}
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
                  if (mapRef.current) {
                    mapRef.current.panTo({
                      lat: selectedPlace.lat,
                      lng: selectedPlace.lng,
                    });
                  }
                }}
                className="text-[#ef3a45] font-medium text-sm hover:underline"
              >
                📍 View on Map
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default SmallMap;
