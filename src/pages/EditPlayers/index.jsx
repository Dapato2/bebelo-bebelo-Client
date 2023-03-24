import { PlayersList } from "../../components";
import { addPlayersEp } from "../../services/players.services";
import React, { Component, useState, useContext } from 'react';
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function EditPlayers() {
    const { idGame } = useParams();
    const [names,setNames] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate()
    const addTags = (tags,type) => {
        if(type === "names" ){
            setNames(tags)
        }
      };
      const editPlayers = async () => {
        try {
            const responsePlayers = await addPlayersEp({
                playersName:names
              } )
              navigate(`/edit-players/${idGame}/${responsePlayers.data.idPlayers}`)
            
        } catch (error) {
            console.log("error",error)
        }

    return(
        <div>
        <PlayersList selectedTags={addTags}></PlayersList>
        
        </div>
    )
    }}