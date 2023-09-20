import React, { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import Map from "../Map/Map"


export default function MapRoute() {
  // const [isReadOnly, setIsReadOnly] = useState(true)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-l bg-indigo-500 text-gray-100 px-7 py-5 rounded-md">Map Route</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80%] sm:h-[50%]">
     
        <div className="grid gap-4 py-4">
         <Map />
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
