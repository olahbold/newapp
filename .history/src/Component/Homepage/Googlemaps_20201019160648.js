import React  from 'react'
import { GoogleMap, withGoogleMap, withScriptjs,Marker, InfoWindow } from "react-google-maps"
  

//const [newstate, setstate] = useState('')

 function Map() {
  return (
    <GoogleMap   defaultZoom={15} 
                defaultCenter ={{ lat:39.764060, lng:-86.289130}} >
  
    <Marker position ={{lat:39.764060, lng:-86.289130}}/> 
    <InfoWindow position ={{lat:39.764060, lng:-86.289130}}><div><h5>FLEM MINISTRIES</h5>
     <h 58 S Girls School Road Indianapolis IN 46231 USA</div></InfoWindow>
    
    
    
   

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


