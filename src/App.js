import React from 'react';
import './Styles/App.css';

import SideBar from './AppComponents/SideBar/SideBar';
import Dashboard from './Scenes/Dashboard';
import { Outlet, Route, Routes } from 'react-router-dom';
import GeneralInfo from './AppComponents/DetailedInformation/GeneralInfo';
import Auth from './Scenes/Auth';
// import Auth from './Scenes/Auth';


function App() {
  return (
      <div> 
    <Routes>
    <Route  path="/auth" element={<Auth />} />

          <Route
        element={
          <div className='w-[100%] flex gap-2'>
          <SideBar />
            <Outlet />
          </div>
        }
      >
        <Route  path="/" element={<Dashboard />} />
        <Route  path="/team" element={<GeneralInfo />} />
        <Route path="/messages" element={<Dashboard />} />
      </Route>
    </Routes>
    </div>
  //  </div>

  );
}

export default App;
