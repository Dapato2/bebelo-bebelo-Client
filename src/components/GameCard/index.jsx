import React from 'react';
import "./index.css"
import {TimerBar}from "../../components/index"
function gCard(props) {
    return (
        <div>
        <div>
          <div class="mui-card xs-shadow">
            <TimerBar  handleOpen = {props.handleOpen} timeRunning = {props.timeRunning}/>
            {props.children}
          </div>
          
        </div>

        </div>
    );
};

export default gCard;