import React from 'react'
import SingleStat from './TruckStats/SingleStat'
function TruckDetails() {
  return (
<div className='truck-details'>
    <SingleStat title='Truck' details='Benz 80E190'  />
    <SingleStat title='Weight' details='7,340 kg'  />
    <SingleStat title='Pallets' details='13/20'  />
    <SingleStat title='Space' details='65% / 35%'  />
    <SingleStat title='Volume' details='18 m²'  />

</div>
  )
}

export default TruckDetails
