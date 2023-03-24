import { defaultEp } from '../../services/game.services'
import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { Button, Grid, Typography,Alert,Modal,Box } from '@mui/material';
import { flushSync } from 'react-dom'
import {  GameCard,CustomizedTables } from '../../components';
import "./index.css"
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function PlayGame() {
    const { idGame } = useParams();
    const [gameCreated, setGameCreated] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [displayedQuestion, setDisplayedQuestion] = useState(null);
    const [noQuestions, setNoQuestions] = useState(false); // new state
    const [playerSelected,setPlayerSelected] = useState(0);
    const [timeRunning, setTimeRunning] = useState(true)

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)
    setTimeRunning(false)
    };
    const handleClose = () => setOpen(false);
//modalFinish
    const [openFinish, setOpenFinish] = useState(false);
    const handleOpenFinish = () => {setOpenFinish(true)

    };
    const handleCloseFinish = () => setOpenFinish(false);
  
    const isTherePlayer = () => {
        if(gameCreated.playersName[playerSelected + 1] ){
            setPlayerSelected(playerSelected + 1)
        }else{
            setPlayerSelected(0)
        }
    }

    const getData = async () => {
      try {
        const responseGame = await defaultEp(idGame);
        setGameCreated(responseGame.data);
        setQuestions(responseGame.data.questions);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const changeQuestion = () => {
      const remainingQuestions = questions.filter(
        (question) => question !== displayedQuestion
      );


      if (remainingQuestions.length ) {
        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        setDisplayedQuestion(remainingQuestions[randomIndex]);
        setQuestions(remainingQuestions);
      }else{
        setTimeRunning(false)
        handleOpenFinish()
      }
    };
    const navigate = useNavigate();
    const handleFinishGame = () => {
      navigate(`/games-created`);
    };

    const onContinue = () => {
        if(questions.length){
            changeQuestion()
            setTimeRunning(true)
            isTherePlayer()

        }else{
            navigate("/game")
            
        }
        handleClose()
    }
  
    return (
      <div className='bodyGame'>
        <div className='flex-container'>
          <div>
            <GameCard handleOpen = {handleOpen} timeRunning = {timeRunning}> 
              <div>
                <h1>{displayedQuestion ? displayedQuestion : 'Oprime para comenzar...'}</h1>
                {noQuestions && (
                  <Alert severity="warning">No more questions left.</Alert>
                )}
              </div>
              <div className='buttonDiv'>
                <Button className='gameButton' onClick={() => {
                  setTimeRunning(false)
                 
                  setTimeout(() => {onContinue()},1000)
                } }>NEXT</Button>
              </div>
            </GameCard>
          </div>
          <div>
            {questions && questions.length > 0 ? (
              <CustomizedTables playersNames={gameCreated.playersName} playerSelected = {playerSelected} />
            ) : (
              <p>Oprimpe para comenzar...</p>
            )}
            {noQuestions && (
              <div>
                <Button onClick={handleFinishGame}>Finish Game</Button>
              </div>
            )}
          </div>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           TIME'S UP!!!
          </Typography>
          
          <Button onClick={onContinue} >Continue </Button>
        </Box>
      </Modal>

      <Modal
        className='finishModal'
        open={openFinish}
        onClose={handleCloseFinish}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           WELL DONE!
          </Typography>
          
          <Button onClick={handleFinishGame} >Continue </Button>
        </Box>
      </Modal>
        </div>
      </div>
    );
  }

  export default PlayGame;