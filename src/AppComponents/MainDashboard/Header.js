import React from 'react'

function Header() {
  return (
    <div className='flex  justify-between sm:justify-around sm:w-full sm:py-5 px-3'>
        <h1 className='text-4xl font-bold' >Shipment Management</h1>
        <button className='text-l bg-indigo-500 text-white px-4 py-2 rounded-md'>Add order</button>
    </div>
  )
}

export default Header