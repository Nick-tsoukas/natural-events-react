/* src/App.js */
import React, {
	useState
} from 'react';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

import FeatureLayer from './components/FeatureLayer'
import Icons from './icons/icons'

const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const defaultState = {
	center: {lat: 0, lng: 0},
	title: '',
	open: false
}

function App() {  
	const [popup, setPopup] = useState(defaultState)

	const handleClick = ({feature, map}) => {
		const lngLat = {
			lat: feature.geometry.coordinates[1],
			lng: feature.geometry.coordinates[0]
		}
		setPopup({
			center: lngLat,
			title: feature.properties.title,
			description: feature.properties.description,
			open: true
		})
		map.flyTo({center: lngLat, zoom: 12})
	}

	return (
		<Map
			style="mapbox://styles/mapbox/satellite-v9"
			containerStyle={{
				height: '100vh',
				width: '100vw'
			}}
			center={[0,0]}
			zoom={[0]}
		>
			<FeatureLayer handleClick={handleClick} icon={Icons.wildfires}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.seaLakeIce}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.severeStorms}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.volcanoes}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.tempExtremes}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.dustHaze}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.waterColor}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.drought}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.earthquakes}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.floods}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.landslides}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.manmade}/>
			<FeatureLayer handleClick={handleClick} icon={Icons.snow}/>
			{
				(popup.open) ?
					<Popup
						coordinates={popup.center}
						offset={
							{bottom: [0,20]}
						}
						onClick={(event,map)=>{
							
							event.preventDefault();
							event.stopPropagation();
							
							setPopup({
								open: false
							})
						}}
					>
						<h3>{popup.title}</h3>
						<div>{popup.description ? popup.description : ''}</div>
					</Popup> :
					<div></div>
			}	
		</Map>
		);
}

export default App;