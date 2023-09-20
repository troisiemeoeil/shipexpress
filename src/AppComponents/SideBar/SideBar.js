import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useAuth0 } from '@auth0/auth0-react';

function SideBar() {
  const [toggle, setToggle] = useState(false)
  const { logout } = useAuth0();

  return (

      <div className={`${toggle ? 'w-[15rem] items-start pl-7  ' : "w-[5rem] items-start pl-7 "}  flex flex-col gap-60 transition-all delay-400 duration-700 relative top-0   h-[100vh]`}>
      
  
   <button 
      className={` w-full flex justify-end pt-5 pr-5  transition delay-400 duration-700 `} 
      onClick={()=> {
        setToggle(!toggle)
      }}>
        {
          toggle ?  
    
          <CiMenuFries  className='text-[28px] font-semibold'/>
      : 
          <CiMenuBurger  className='text-[28px] font-semibold'/> 
        }
       
      </button>
 
      <MenuItems state={toggle} />
 
      <button 
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className={` w-full flex justify-end pt-5 pr-5  transition delay-400 duration-700 `} >
         <img src={"https://img.icons8.com/ios/50/logout-rounded-left.png"} className='w-[30px] ' alt='dashboard'/>
    
      </button>
 

  </div>
    
  )
}

export default SideBar