import React  from 'react'
import { GoogleMap, withGoogleMap, withScriptjs,Marker  } from "react-google-maps"


 function Map() {
  return (
    <GoogleMap   defaul 
                defaultCenter ={{ lat:39.764060, lng:-86.289130}} >
  
    {(<Marker position ={{lat:39.764060, lng:-86.289130}}/> )}

</GoogleMap>  
  );
}
 const WrappedMap =withScriptjs(withGoogleMap(Map))


export default function Mapping() {
  return(
     <div style = {{ height:'100vh', width : '100vw'}}>
       <WrappedMap  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key 
      =${process.env.REACT_APP_GOOGLE_KEY}`} 
                    loadingElement={<div style={{ height: `100%` }} />} 
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}

       
       
       />
     </div>
    
  );
}


