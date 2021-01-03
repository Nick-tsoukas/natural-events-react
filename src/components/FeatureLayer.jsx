import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Layer, Feature } from 'react-mapbox-gl'
import { ImageFactory } from '../lib/ImageFactory'

const FeatureLayer = ({ handleClick, icon }) => {
	const [events, setEvents] = useState([]);
	const layoutLayer = {'icon-image': icon.name}
	const images = ImageFactory(icon.name, icon.icon)

	useEffect(() => {
		const fetchData = async () => {
			try {
				  const result = await axios(
					`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${icon.categoryId}`, {
						params: {
							api_key: process.env.REACT_APP_NASA_ACCESS_TOKEN,
						}
					}
				  );
				  setEvents(
					[...result.data.events]
				  );
				  console.log(result.data.events)
			} catch (err) {
				console.error(err)
			}
		};
		fetchData();
	},[])
	
	return (
		<Layer type="symbol" id={icon.categoryName} layout={layoutLayer} images={images}>
			{
				events.map(({geometry, id, title, description}) => {
					const latLong = geometry[0].coordinates
					return (
						<Feature 
							key={id}
							coordinates={latLong}
							onClick={handleClick}	
							properties={{
								id,
								title,
								description
							}}
						/>
					)
				})
			}
		</Layer>
	)
}

export default FeatureLayer
