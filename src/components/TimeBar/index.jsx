import React, { useState, useEffect } from "react";
import { Alert ,AlertTitle} from "@mui/material";
import "./index.css";
import ActionAlerts  from "../ModalAlert";

export default function TimerB(props) {
  const [time, setTime] = useState(10); // Time in seconds
  const [width, setWidth] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  let interval 
  useEffect(() => {
    if(props.timeRunning){
      setTime(10)
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }else{

      clearInterval(interval);
      
    } 
    return () => clearInterval(interval);
  }, [props.timeRunning]);

  useEffect(() => {
    if (props.timeRunning) {
      setWidth(((time / 10) * 100).toFixed(2));
      if (time === 0) {
        setShowAlert(true)
        clearInterval(interval)
        props.handleOpen()
      }
    }
  
  }, [time,props.timeRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <div className="timer-container">
        <div>
          <div className="timer-bar" style={{ width: `${width}%` }}></div>
        </div>
      </div>
      <div className="timer">
        {time > 0 ? `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}` : `00:00`}
      </div>
     
    </div>
  );
}