import {Button,Container,TextField,Link,Typography ,Grid,Box} from '@mui/material'
import { AuthContext } from "../../context/auth.context";
import React, { Component,useState,useContext } from 'react';
import {  useNavigate } from "react-router-dom";
import {signupEp} from "../../services/auth.services";
import "./index.css"

  function CreateGame(){

    const[gameName,setGameName] = useState("");
    const[questions,setQuestions] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);


    const navigate = useNavigate();

  const {storeToken, authenticateUser} = useContext(AuthContext)
  const handleGameName = (e) => setGameName(e.target.value);
  const handleQuestions = (e) => setQuestions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { gameName, questions};


      signupEp(requestBody)
      .then((response) => {

        storeToken(response.data.authToken)
        authenticateUser();
        navigate("/home");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
      console.log("Hasta aqui si funciona")
  };

    
        return (
            <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                <Box  noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                              onChange={handleGameName}
                              value={gameName} 
                autoComplete="full Name"
                name="gameName"
                required
                fullWidth
                id="gameName"
                label="Game Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
            <TextField  
                onChange={handleQuestions}
                value={questions}
                required
                fullWidth
                id="questions"
                label="Add Questions"
                name="questions"  
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Continue
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link className='link' href="/login" variant="body3">
                {"Home"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    
        );
    }

    export default CreateGame;

