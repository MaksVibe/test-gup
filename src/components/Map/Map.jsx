import GoogleMapReact from "google-map-react";
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const [center, setCenter] = useState({
    lat: 50.45,
    lng: 30.52,
  });
  const [zoom, setZoom] = useState(11);

  return (
    <div style={{ height: "100vh", width: "80%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyB2iB0ZNjuigGI-HVW1yOx8PHJl-gDCdbE",
          language: "ua",
          region: "ua",
          libraries: ["places"],
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={50.450001} lng={30.523333} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
