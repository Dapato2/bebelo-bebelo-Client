import { Button, Container, TextField, Link, Typography, Grid, Box } from '@mui/material'
import { AuthContext } from "../../context/auth.context";
import React, { Component, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { DeletableChips,PlayList } from "../../components/index"
import { signupEp } from "../../services/auth.services";
import {createEp} from "../../services/game.services"
import {addPlayersEp} from "../../services/players.services"
import "./index.css"

function CreateGame() {

  const [gameName, setGameName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [names,setNames] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext)
  const handleGameName = (e) => setGameName(e.target.value);
  const handleQuestions = (e) => setQuestions(e.target.value);

  const addTags = (tags,type) => {
    if(type === "questions" ){
    setQuestions(tags)
    }else{
      setNames(tags)
    }
  };

  const createGame = async ()  => {
    try {
      const responseCreategame = await createEp({
        gameName,questions
      });

      const responsePlayers = await addPlayersEp({
        playersName:names
      },responseCreategame.data._id )
      navigate(`/play/${responseCreategame.data._id}`)

    } catch (error) {
      console.log("error",error)

    }
  }
  


  return (
    <div className='pageContainerCreate'>
      <Container className='containerDiv'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography className='createTitle'>
            Create your own game!
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12} >
                <TextField
                  onChange={handleGameName}
                  value={gameName}
                  autoComplete="full Name "
                  name="gameName"
                  required
                  fullWidth
                  id="gameName"
                  label="Game Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <DeletableChips selectedTags={addTags}  >
                </DeletableChips>

              </Grid>
              <Grid item xs={12}>
                <PlayList selectedTags={addTags}  >
                </PlayList>

              </Grid>
            </Grid>

            <Button
              className='submitCreate'
              onClick={createGame}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link className='link' href="/" variant="body3">
                  {"Home"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default CreateGame;

