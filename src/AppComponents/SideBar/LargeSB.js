import React from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../../components/ui/sheet"

  
const side = "left"
 
function LargeSB() {
  return (
    <div className="grid grid-cols-2 gap-2">
        
      <Sheet key={side}>
        <SheetTrigger asChild>
       
         <Button variant="outline" className='w-[60px] rounded-full py-7 bg-transparent border-0'>
      <img src={"https://camo.githubusercontent.com/00aeeefb66a12c3a282cbd99423808c033058711265e04dada09468178c97170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f77616c6b78636f64652f64617368626f6172642d69636f6e732f706e672f61746c61737369616e2d636f6e666c75656e63652e706e67"} className='rounded-full' alt='logo'/>
      </Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>TRANSEXPRESS LTD</SheetTitle>
            <SheetDescription>
           
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-3 mt-24 py-4">
          <button className='flex gap-5 items-center'>
            <img src={"https://img.icons8.com/sf-regular/48/home.png"} className='w-[25px]' alt='dashboard'/>
            <h2 className='text-xl font-semibold'>Dashboard</h2>
            </button>
            <button className='flex gap-5 items-center'>
            <img src={"https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png"} className='w-[25px] ' alt='dashboard'/>
            <h2 className='text-xl font-semibold'>Messages</h2>
            </button>
            <button className='flex gap-5 items-center'>
            <img src={"https://img.icons8.com/ios/50/waypoint-map.png"} className='w-[25px]' alt='dashboard'/>
            <h2 className='text-xl font-semibold'>Map Route</h2>
            </button>
          </div>
       
        </SheetContent>
      </Sheet>
 
  </div>
  )
}

export default LargeSB