
import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems({state}) {
        console.log(state)

  return (
    <div className=' '>
        <div className='  flex flex-col gap-7 justify-center'>
        <Link to="/" >
      
            <button className='flex items-center gap-3'>
            <img src={"https://img.icons8.com/sf-regular/48/home.png"} className='w-[30px]' alt='dashboard'/>
            <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-opacity ease-in delay-150 `}>Dashboard</h5>
            </button>
            </Link>

                  <Link to="/messages" >
            <button className='flex items-center gap-3'>

                  <img src={"https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png"} className='w-[30px] ' alt='dashboard'/>
        <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-opacity ease-in delay-150 `}>Messages</h5>
            </button>
                  
                  </Link>
      

            <button className='flex items-center gap-3'>
        <img src={"https://img.icons8.com/ios/50/waypoint-map.png"} className='w-[30px] ' alt='dashboard'/>      
        <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-all ease-in delay-150 `}>Routes</h5>

                </button>
                <button className='flex items-center gap-3'>
        <img src={"https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-inbox-interface-kiranshastry-lineal-kiranshastry.png"} className='w-[30px] ' alt='dashboard'/>               
        <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-opacity ease-in delay-150 `}>Documents</h5>

                </button>
                <button className='flex items-center gap-3'>
        <img src={"https://img.icons8.com/pastel-glyph/64/overtime--v1.png"} className='w-[30px] ' alt='dashboard'/>          
        <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-opacity ease-in delay-150 `}>Calendar</h5>

                </button>
                <button className='flex items-center gap-3'>
        <img src={"https://img.icons8.com/ios/50/check--v1.png"} className='w-[30px] ' alt='dashboard'/>             
            <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-opacity ease-in delay-150 `}>Reports</h5>

                </button>
                <button className='flex items-center gap-3'>
        <img src={"https://img.icons8.com/ios/50/pie-chart-report.png"} className='w-[30px] ' alt='dashboard'/>
            <h5 className={`${state ? "opacity-100" : " opacity-0"} text-base transition-opacity ease-in delay-150 `}>Statistics</h5>

                </button>
               
    </div>
 
    </div>
  )
}

export default MenuItems