import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

// Stili e opzioni della mappa
const mapContainerStyle = {
    width: "100%",
    height: "400px",
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const ApartmentMap = ({ lat, lng }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Chiave API
    });

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    // Personalizzazione del marker
    const markerIcon = {
        url: "https://example.com/path/to/your/custom-marker.png", // Sostituisci con l'URL della tua icona
        scaledSize: new window.google.maps.Size(40, 40), // Dimensioni dell'icona
    };

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{ lat, lng }}
            options={options}
        >
            {/* Marker per la posizione dell'appartamento */}
            <MarkerF
                position={{ lat, lng }}
                icon={markerIcon} // Usa l'icona personalizzata
                title="Posizione dell'appartamento"
            />
        </GoogleMap>
    );
};

export default ApartmentMap;
