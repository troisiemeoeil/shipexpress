import React, { useState } from 'react'

function Chip({label, value}) {
    const [active, setActive] = useState(false)
    return (
      <button className={` rounded-sm flex items-center gap-2  
       justify-center 
       text-sm
       font-medium 
       text-black 
       py-1
       px-1
       w-auto  
       ${active ? "bg-indigo-200 text-indigo-600" : "bg-zinc-200"}`} 
       onClick={() => setActive(!active)}
       >
         {label} 
          <div className={`px-1.5  rounded-sm text-xs  ${active ? "bg-indigo-300 text-indigo-600" : "bg-gray-300"}`}>
             {value}
          </div>
      </button>
    )
  }

function Chips() {
  return (
       <div className='flex flex-wrap gap-2 m-4'>
         <Chip label={"View All"} value={"154"} />
         <Chip label={"Active"} value={"21"} />
         <Chip label={"On Hold"} value={"133"}  />
       </div>
     )
}

export default Chips