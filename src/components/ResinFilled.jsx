import React from "react"

const ResinFilled = ({current_resin}) => {
  const date = new Date(current_resin).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  return(
    <h1>{(date == "Invalid Date") ? "00:00" : date}</h1>
  )
}

export default ResinFilled