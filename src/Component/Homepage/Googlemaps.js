import React  from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );
class Googlemaps extends  React.Component {
   

    static defaultProps = {
        center: {
          lat: 39.762891,
          lng: -86.290561
        },
        zoom: 20
      };
     
      render() {
        return (
          

          // Important! Always set the container height explicitly
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key:'AIzaSyBzIp3ng6KSXTbUp1hWNq-CT9-oSRgm_mw'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={39.762891}
                lng={-86.290561}
                text="My Marker"
              />
              
            </GoogleMapReact>
          </div>
        );
      }
    }


export default Googlemaps
