import React from 'react'
import '../../../Styles/TruckImages.css'


function Image({image}) {
  return (
    <img src={image} alt="Truck" width="20%" height="100%" className='truckImage' />
  )
}

export default Image