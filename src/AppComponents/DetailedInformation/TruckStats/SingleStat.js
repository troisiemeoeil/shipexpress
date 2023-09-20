import React from 'react'
import '../../../Styles/TruckDetails.css'

function SingleStat({title, details}) {
  return (
    
    <div className='truck-details-container'>
    <div style={{fontSize:"1.3rem", fontWeight:"bold"}}>{title}</div>
     <div>{details}</div>
    </div>
  )
}

export default SingleStat