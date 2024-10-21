  import React, { useState } from 'react';
  import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
  import firebase from 'firebase/app'; // Asegúrate de tener Firebase configurado

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 4.60971,
    lng: -74.08175,
  };

  const ReportarScreen = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [tipo, setTipo] = useState('');
    const [fecha, setFecha] = useState('');

    const onMapClick = (event) => {
      setSelectedPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    };

    const handleSubmit = () => {
      const report = {
        tipo,
        fecha,
        direccion: selectedPosition,
      };

      firebase.firestore().collection('reportes').add(report)
        .then(() => {
          alert('Reporte enviado exitosamente');
        })
        .catch((error) => {
          console.error("Error al enviar el reporte: ", error);
        });
    };

    return (
      <div>
        <LoadScript googleMapsApiKey="AIzaSyCnbFMm2M_fYhtAM0YfsQh4p0AKs_Z0LRs">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onClick={onMapClick}
          >
            {selectedPosition && <Marker position={selectedPosition} />}
          </GoogleMap>
        </LoadScript>
        <form onSubmit={handleSubmit}>
          <label>Tipo de Reporte:</label>
          <input value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Tipo de reporte" />
          
          <label>Fecha:</label>
          <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" />

          {selectedPosition ? (
            <p>
              Dirección seleccionada: Lat: {selectedPosition.lat}, Lng: {selectedPosition.lng}
            </p>
          ) : (
            <p>Haz clic en el mapa para seleccionar una ubicación.</p>
          )}

          <button type="submit">Enviar Reporte</button>
        </form>
      </div>
    );
  };

  export default ReportarScreen;
