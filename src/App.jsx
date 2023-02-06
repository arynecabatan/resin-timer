import {React, useEffect, useState} from "react"
import CountdownTimer from "./components/CountdownTimer";
import ResinFilled from "./components/ResinFilled";
import warninglogo from './assets/warning.svg';
import resinicon from "./assets/resin.png"

const App = () => {

  const MAX_RESIN = 160
  const MILLISECONDS = 480000
  const [msTimer, setMsTimer] = useState("");
  const [resinCount, setResinCount] = useState("");
  const [begin, setBegin] = useState(false);

  const valueChange = e => {
    e.preventDefault()
    let current_resin = e.target.current_resin.value
    
    const time_full = new Date();
    time_full.setMinutes(time_full.getMinutes() + ((MAX_RESIN - current_resin) * 8))
    setMsTimer(Date.parse(time_full))
    setResinCount(current_resin)
    e.target.reset()
    setBegin(true);
  };
  

  useEffect(() => {
    if (begin) {
      setTimeout(() => {
        setResinCount((resinCount >= 160) ? MAX_RESIN : parseInt(resinCount) + 1)
      }, MILLISECONDS);
    } else {
      setResinCount(0);
    }
  });

  return (
    <>   
      <header>
        <img src={resinicon}/>
        <div>
          <h1>Resin Timer</h1>
          <h3>Gensin Impact resin timer</h3>
        </div>
      </header>
      <main>
        <form onSubmit={valueChange}>
          <input
            name="current_resin"
            id="current_resin"
            type="number"
            min="0"
            max="160"
            placeholder="Enter current resin"
            required/>
          <button type="submit">Send</button>
        </form>
        <div className="stat-container" style={(begin == true) ? {opacity: "1"} :{opacity: "0.25"}}>
          <div className="stat-widget">
            <h1>{resinCount}</h1>
            <p>Resin Amount</p>
          </div>
          <div className="stat-widget">
            <ResinFilled current_resin={msTimer} />
            <p>Capped at</p>
          </div>
          <div className="stat-widget">
            <CountdownTimer current_resin={msTimer}/>
            <p>Resin Cap Countdown</p>
          </div>
        </div>
        <div className="notice-widget" style={(begin == true) ? {display:"flex", opacity: "1"} :{display:"none", opacity: "0"}}>
          <img src={warninglogo} alt="Warning"/>
          <p>Please be aware of the actual resin count on your account. Time may vary depending on when you input your current resin. No data collected while using this site.</p>
        </div>
        </main>

        <footer>
          <small>
            <p>Not affiliated with Hoyoverse | Design & Develop by Ryne, 2023 </p>
          </small>
        </footer>

    </>
  )
}

export default App