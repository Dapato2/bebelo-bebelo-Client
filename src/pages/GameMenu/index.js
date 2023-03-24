import "./index.css";
import * as React from 'react';
import { Navbar } from '../../components/index'
import { Typography, Button } from '@mui/material';




function GameMenu() {
    return (
        <div>
            <>
                <Navbar />
            </>
            <div className="pageContainer">

            <>
                <Typography className="titleH" >
                </Typography>
            </>
            < div className="divButton">
                <Button href="/create" className="menuButtons">
                    CREATE GAME
                </Button>
            </div>
            < div  className="divButton">
                <Button href="/play-default" className="menuButtons">
                    BB CLASSIC!
                </Button>
            </div>
            < div  className="divButton">
                <Button href="/games-created " className="menuButtons">
                Games Created
                </Button>
            </div>
            </div>


        </div>
    );
}

export default GameMenu;