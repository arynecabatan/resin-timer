import React, { useEffect, useState } from "react"

const CountdownTimer = ({current_resin}) => {

  const calculateTimeLeft = () => {
    const difference = current_resin - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState("calculateTimeLeft()");

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return(
    <>
    {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <h1>
          <span>{timeLeft.hours}<small>h</small> </span>
          <span>{timeLeft.minutes}<small>m</small> </span>
          <span>{timeLeft.seconds}<small>s</small></span>
        </h1>
      ) : (
        <h1>
          <span>0<small>h</small> </span>
          <span>00<small>m</small> </span>
          <span>00<small>s</small></span>
        </h1>
      )}
    </>
  )
}

export default CountdownTimer