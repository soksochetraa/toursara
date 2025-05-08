import React, { useState, useRef, useMemo } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";

const SmallMap = ({
  width = "545px",
  height = "700px",
  borderRadius = "0px",
  lat = 11.5564,
  lng = 104.9282,
  title = "Royal University of Phnom Penh (RUPP)",
  province = "Phnom Penh, Cambodia",
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Royal_University_of_Phnom_Penh.jpg/500px-Royal_University_of_Phnom_Penh.jpg",
  radius = 0,
}) => {
  const containerStyle = { width, height, borderRadius };
  const location = { lat, lng, title, province, imageUrl };
  const [selectedPlace, setSelectedPlace] = useState(location);
  const mapRef = useRef(null);

  const markerIcon = useMemo(() => {
    if (window.google && window.google.maps) {
      return {
        url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZjNhNDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluLWljb24gbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+",
        scaledSize: new window.google.maps.Size(46, 46),
      };
    }
    return null;
  }, []);

  const onLoad = (map) => {
    mapRef.current = map;
    map.panTo({ lat, lng });
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={15}
        onLoad={onLoad}
      >
        <Marker
          position={{ lat, lng }}
          icon={markerIcon}
          onClick={() => setSelectedPlace(location)}
        />

        {selectedPlace && (
          <InfoWindow
            position={{ lat, lng }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div className="w-[220px]">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <h2 className="font-semibold text-[#222] text-base mb-1">
                {title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{province}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ef3a45] cursor-pointer font-medium text-sm hover:underline"
              >
                View on Map
              </a>
            </div>
          </InfoWindow>
        )}

        {radius > 0 && (
          <Circle
            center={{ lat, lng }}
            radius={radius}
            options={{
              strokeColor: "#EF3A45",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#EF3A4544",
              fillOpacity: 0.35,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default SmallMap;
