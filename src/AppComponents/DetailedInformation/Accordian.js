import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

import '../../Styles/DetailedInfo.css'
import Container from './TruckImages/Container'
import ModelViewer from '../ModelViewer'
import Calendar  from "./Calendar"
function Accordian() {
  return (

    <Tabs defaultValue="Information" className="w-full h-auto mt-4" >
  <TabsList>
    <TabsTrigger value="Information">Information</TabsTrigger>
    <TabsTrigger value="TruckInfo">360° View</TabsTrigger>
    <TabsTrigger value="Company">Company</TabsTrigger>
    <TabsTrigger value="Schedule">Schedule</TabsTrigger>

  </TabsList>
  <div className='h-auto'>
  <TabsContent value="Information">
  <Container/>
  </TabsContent>

  <TabsContent value="TruckInfo">
  <ModelViewer />
  </TabsContent>

  <TabsContent value="Schedule">
  <Calendar />
  </TabsContent>
  

  </div>

</Tabs>

  )
}

export default Accordian