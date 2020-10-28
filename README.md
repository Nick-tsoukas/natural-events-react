This project was created with create react app

I was working on an app awhile ago and decided to bring it back from the dead with all the tropical storms hitting the SE this year and the wildfires in the West. Jump in if you are a coder friend.

Using a live dataset from NASA'S Earth Observatory that tracks all the natural events on earth via satellites, remote systems, and communication from other municipalities, we plot the events as they happen in realtime on an earth satellite image. Events like earthquakes, volcanoes, wildfires, and more. Then later will chart the data to visually represent the drastic increase in volume as the years go on to hopefully get a better idea of the effects we have on the planet. 

Currently, I'm getting back 186 events across the earth, and a large percentage of them are wildfires in the US. 

This project is a clean start using react, reactMapBoxGL, and the NASA API. Still, lots to do.

Project Needs
better icons, color and size
side bar with all events categories 
header for navigation map chart data 
descriptions on the map markers 
color code markers buy category event 
chart.js for existing archive data set on natural disasters 
Whatever else like news articles if available free from an API 

If you want, go the the GitHub and 
clone the repo
run npm install 
get mapboxGL key (it's free)
Get NASA API KEY, but will work without one with rate limit
Create a .env file in scr directory to hide your keys
Name you key starting with REACT_APP then whatever 
run npm run start 
Good to go.
 
mapbox api docs = https://docs.mapbox.com/mapbox-gl-js/api/
github = https://github.com/Nick-tsoukas/natural-events-react