import Variants from "../../components"
import "./index.css"
import {Typography} from '@mui/material'
import{GameCard} from "../../components/gCard"


import React from 'react';

function DefaultGame() {
    return (
        <div className="pageDiv">
            <div className="titleDiv">
                <Typography className="createdTitle">
                    Games List
                </Typography>
            </div>
            <div className="cardsContainer">
            <GameCard/>

            </div>

        </div>
    );
}

export default DefaultGame;