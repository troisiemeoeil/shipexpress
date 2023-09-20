import React from 'react';
import '../Styles/App.css';
import GeneralInfo from '../AppComponents/DetailedInformation/GeneralInfo';
import Accordian from '../AppComponents/DetailedInformation/Accordian';
import TruckDetails from '../AppComponents/DetailedInformation/TruckDetails';
import transTrack from '../Assets/transTruck.jpeg';
import Header from '../AppComponents/MainDashboard/Header';
import Chips from '../AppComponents/MainDashboard/Chips';
import Cards from '../AppComponents/MainDashboard/Cards';


function Dashboard() {
  return (
    
   <div className='lg:flex lg:flex-row lg:w-[100%]  xl:flex xl:flex-row  xl:w-[100%]  w-[100%]  md:flex md:flex-col '>
    
      <div className=" lg:flex lg:flex-col lg:w-[50%] lg:h-[100vh] lg:overflow-y-scroll lg:bg-gray-100 " id="canvas-container">
        <Header/>
        <Chips/>
        <Cards />
    </div>

    <div className="lg:flex lg:flex-col lg:w-[50%] lg:h-[100vh] lg:overflow-y-scroll p-7 lg:bg-gray-100" id="canvas-container">
      <GeneralInfo styles="pb-7"/>
      <Accordian />
      <h1 className='text-3xl font-bold py-3'>Load Capacity</h1>
    <img src={transTrack} alt="Truck" width="100%" height="auto"  />

      <TruckDetails />
    
    </div>
   </div>
  );
}

export default Dashboard;
