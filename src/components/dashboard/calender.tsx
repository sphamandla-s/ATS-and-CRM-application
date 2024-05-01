"use client"
 
import * as React from "react"
import { Calendar } from '../ui/calendar'

function Calender() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border text-center items-center"
        />
      )
}

export default Calender