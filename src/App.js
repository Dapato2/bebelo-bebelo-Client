import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import { Login,Signup,HomePage,GameMenu,CreateGame} from './pages';


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path="/create" element={<CreateGame/>} />
        <Route path="/game" element={<GameMenu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>      
    </div>
  );
}

export default App;
