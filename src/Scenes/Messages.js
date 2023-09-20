import React from 'react';
import '../Styles/App.css';
import GeneralInfo from '../AppComponents/DetailedInformation/GeneralInfo';
import Accordian from '../AppComponents/DetailedInformation/Accordian';
import TruckDetails from '../AppComponents/DetailedInformation/TruckDetails';
import transTrack from '../Assets/transTruck.jpeg';


function Messages() {
  return (
    
   <div className='flex '>
    

    <div className="App" id="canvas-container">
      <GeneralInfo styles="pb-7"/>
      <Accordian />
      <h1 className='text-3xl font-bold py-3'>Load Capacity</h1>
    <img src={transTrack} alt="Truck" width="100%" height="auto"  />

      <TruckDetails />
    
    </div>
   </div>
  );
}

export default Messages;
