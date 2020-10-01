import React from 'react'
import Googlemaps from './Homepage/Googlemaps'

import CarouselPage from './Homepage/CarouselPage';
export default function ComposedHomepage() {
    return (
        <div>
          <CarouselPage/> 
          <Googlemaps/>
        </div>
    )
}
