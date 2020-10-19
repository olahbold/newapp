import React  from 'react'
import { GoogleMap, withGoogleMap, withScriptjs,Marker  } from "react-google-maps"
import * as info from "./Component/Information.json";


 function Map() {
  return (
    <GoogleMap   defaultZoom={25} 
                defaultCenter ={{ lat:39.764060, lng:-86.289130}} >
  
    {info.Church.map((inform) =>(<Marker key ={inform.ID}  posit/> )}

<GoogleMap/>  
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


