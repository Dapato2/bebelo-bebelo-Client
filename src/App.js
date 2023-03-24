import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import { Login,Signup,HomePage,GameMenu,CreateGame,GamesCreated,PlayGame,EditPlayers,LogoutPage} from './pages';


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        
        <Route path="/edit-players/:idPlayers" element={<EditPlayers/>}/>
        <Route path="/play/:idGame" element={<PlayGame/>} />
        <Route path="/games-created" element={<GamesCreated/>} />
        <Route path="/create" element={<CreateGame/>} />
        <Route path="/game" element={<GameMenu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<LogoutPage/>} />

      </Routes>      
    </div>
  );
}

export default App;
