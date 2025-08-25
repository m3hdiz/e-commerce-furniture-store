import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Example: San Francisco
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
