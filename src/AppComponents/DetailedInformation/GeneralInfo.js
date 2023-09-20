import React from 'react'
import '../../Styles/DetailedInfo.css'
import { DialogDemo } from './Contact'
import MapRoute from './MapRoute'
function GeneralInfo() {
  return (
    <div className={'routeTitle'  }>
        <div className='leftSection'>
                <div className='title'>UA-145009BS</div>
                <div className='Status'>
                    🔵 On way
                </div>
        </div>
      <div className='flex gap-3'>
      <div className='contact'>
            <DialogDemo/>
        </div>
        <div className='contact'>
            <MapRoute/>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo