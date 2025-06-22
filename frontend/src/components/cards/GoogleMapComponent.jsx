import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const GoogleMapComponent = ({
  activeDestination,
  width = "1100px",
  height = "980px",
}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(); // ✅ Correct location for hook

  const containerStyle = {
    width,
    height,
    borderRadius: "8px",
  };

  const defaultCenter = {
    lat: 12.5657,
    lng: 104.991,
  };

  const onLoad = (map) => {
    mapRef.current = map;
    setIsLoaded(true);
  };

  useEffect(() => {
    if (activeDestination && mapRef.current) {
      setSelectedPlace(activeDestination);
      mapRef.current.panTo({
        lat: activeDestination.lat,
        lng: activeDestination.lng,
      });
      mapRef.current.setZoom(15);
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
        {isLoaded && activeDestination && (
          <Marker
            position={{
              lat: activeDestination.lat,
              lng: activeDestination.lng,
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
                    navigate("/explore/detail", { state: selectedPlace });
                  } else if (currentPath.startsWith("/hotel")) {
                    navigate("/hotel/detail", { state: selectedPlace });
                  }
                }}
                className="text-[#45807b] cursor-pointer font-medium text-sm hover:underline"
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
