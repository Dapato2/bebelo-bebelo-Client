import {ModalPlayers} from "../../components"
import "./index.css"
import {Typography,Grid,Button} from '@mui/material'
import React, { useEffect, useState } from 'react';
import { gamesCreEp } from "../../services/game.services";
import { Link } from "react-router-dom";

function GamesCrated() {
    const [gameCreated, setGameCreated] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [infoGame, setInfoGame] = useState({})

    const getData = async () => {
        try {
            const responseGame = await gamesCreEp();
         
            setGameCreated(responseGame.data)
            
        } catch (error) {
            console.log("error",error);
        }
    }
    useEffect(() => {
       getData(); 
        },[])
    return (
        <div className="pageDiv2">
            <div className="titleDiv2">
                <Typography className="createdTitle2">
                    Games List
                </Typography>
            </div>
            <div className="cardsContainer2">
                {gameCreated.map((games,index) => (
                    <div class="mui-card2 xs-shadow" key={index} >
                        <Grid>
                        <Typography className="gamesPresentT2">GAME:<br/>    {games.gameName} </Typography>
                        </Grid>
                        <Grid>
                        <Typography className="gamesPresent2">{games.questions[0]} </Typography>
                        </Grid>
                        <Grid>
                            <Button className="playButton2" onClick={() => {
                                setInfoGame(games)
                                setIsVisible(true)}} >Play</Button>
                            
                            </Grid>
                    </div>
                ))}
                <ModalPlayers open = {isVisible} handleClose = {() => setIsVisible(false)} infoGame = {infoGame}/>

               
            


            </div>

        </div>
    );
}

export default GamesCrated;