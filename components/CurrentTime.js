import { useState } from "react"

function CurrentTime() {

  const getTimeFormat = () => {
    const dateTime = new Date
    const getHours = dateTime.getHours()
    const getMinutes = String(dateTime.getMinutes()).padStart(2, "0");
    const getDate = dateTime.getDate()
    const getDay = dateTime.toLocaleString('en-us', {  weekday: 'long' })
    const getYear = dateTime.getFullYear()
    return getHours + ':' + getMinutes + ' - ' + getDay + ' ' + getDate + ', ' + getYear
  }

  const [time, setTime] = useState(getTimeFormat)
 
  setInterval(() => setTime(getTimeFormat), 60 * 1000)

  return (
    <span className="text-xl md:text-3xl font-light mb-11 md:mb-7">
      {time}
    </span>
  )
}

export default CurrentTime