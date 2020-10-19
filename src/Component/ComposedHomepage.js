import React from 'react'
import Mapping from './Homepage/Googlemaps'

import CarouselPage from './Homepage/CarouselPage';
export default function ComposedHomepage() {
    return (
        <div>
          <CarouselPage/> 
          
          <Mapping/>
       
        </div>
    )
}
