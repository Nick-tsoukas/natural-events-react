/* src/App.js */
import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import axios from 'axios';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import markerImage from './room-white-18dp.svg';

const Map = ReactMapboxGl({
  accessToken:
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

function App() {
  
  const [events, setEvents] = useState({
    plots: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://eonet.sci.gsfc.nasa.gov/api/v3/events',
      );
      setEvents({
        plots: result.data.events
      });
      console.log(result.data.events)
    };
    fetchData();

  },[]);
  
  
    

  return (
    <Map
      style="mapbox://styles/mapbox/satellite-v9"
      containerStyle={{
       height: '100vh',
       width: '100vw'
      }}
    >
      
      {events.plots.map((e) => {
      if(e.geometry[0].coordinates.length === 2) {
        return (
          <Marker
          coordinates={e.geometry[0].coordinates}
          anchor="bottom">
        <img style={{color: 'red'}} src={markerImage}/>
        </Marker>
        )
      }
      })}
    </Map>
    );
}

export default App;