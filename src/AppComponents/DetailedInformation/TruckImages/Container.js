import React from 'react'
import Image from './Image'
import TruckOne from "../../../Assets/images.jpg"
import TruckTwo from "../../../Assets/images (2).jpg"
import TruckThree from "../../../Assets/images (1).jpg"
import '../../../Styles/TruckImages.css'


function Container() {
  return (
    <div className='container'>
   <div className='containerImage'>
        <Image image={TruckOne} />
        <Image image={TruckTwo} />
        <Image image={TruckThree} />
    </div>
    <button className='button'> Documents</button>
    </div>
 
  )
}

export default Container
