import "./index.css";
import * as React from 'react';
import { Navbar } from '../../components/index'
import { Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


function GameMenu() {
    return (
        <div>
            <>
                <Navbar />
            </>
            <div className="pageContainer">

            <div className="divBack">
            <Button href="/">
               <ChevronLeftIcon sx={{fontSize:"90px",color:"#0b5351",textDecoration:"none"}} />
                
            </Button>
            </div>
            < div className="divButton">
                <Button href="/create" className="menuButtons">
                    CREATE GAME
                </Button>
            </div>
            < div  className="divButton">

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