import { Modal, Button, Box, Grid } from "@mui/material"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlayList from "../PlayersList";
import React from "react";
import "./index.css"
import { defaultEp } from "../../services/game.services";
import { editPlayersEp } from "../../services/players.services";

function ModalPlayers({ open, handleClose,infoGame }) {

    const [newNames, setNewNames] = useState([]);
    const [detailGame, setDetailGame] = useState({});
    const  navigate = useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px',
        borderRadius: '10px',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3, 
        fontFamily: 'Roboto',   
      };
   


    const addTags = (tags, type) => {
        if (type === "names") {
            setNewNames(tags)
        }
    };

    useEffect(() => {
        if(open){
          getData()
        }
        },[open])

        const getData = async () => {
            try {
                const response = await defaultEp(infoGame._id)
                setDetailGame(response.data)
            } catch (error) {
                console.log("error getData",error);
                
            }
        } 

        const updateAndPlay = async () => {
            try {
                const responseUpdate = await editPlayersEp(infoGame._id,detailGame.idPlayers,{playersName:newNames})
                navigate(`/play/${infoGame._id}`)
            } catch (error) {
                console.log("error update",error);
            }
        }
        
    return (

        <Modal className="modal1"
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{  ...style }}>

                <h1>NEW PLAYERS</h1>
                <PlayList  selectedTags={addTags}  >
                </PlayList>
                <Button onClick={updateAndPlay} disabled={!newNames.length}  sx={{  margin:"10px" }} >
                    PLAY
                </Button>
                <Button onClick={handleClose}>
                    CANCELAR
                </Button>


            </Box>
        </Modal>
    )

}

export default ModalPlayers;
