import * as React from "react"

// import { Calendar } from "../../components/ui/calendar"
// import { useState } from "react"
// import Cal from "@calcom/embed-react";
export default function CalendarDemo() {
//   const [date, setDate] = useState(new Date())

  return (
    // <Calendar
    //   mode="single"
    //   selected={date}
    //   onSelect={setDate}
    //   className="rounded-md border shadow"
    // />
    <iframe title="calendar" width="100%" height="650em" src="https://cal.com/lewyathan-ooapdi/15min?date=2023-07-17&month=2023-07"></iframe>
  )
}
