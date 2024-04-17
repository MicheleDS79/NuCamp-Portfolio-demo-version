import { useState } from "react";
import { TEST_GAMES } from "./components/TEST_GAMES";
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";


function App() {
  const [gamesList, setGamesList] = useState( TEST_GAMES )
  
  return (
    <div>
      <h1>My Board Games</h1>
      <Link to="/" className="btn-link me-3">Home</Link>
      <Link to="random" >Random</Link>
      <Routes>
        <Route path="/" element={ <HomePage gamesList={gamesList}/> } />
       <Route path="/random" element={  <RandomPage gamesList={gamesList}/> }/>
      </Routes>
     

    

     
    </div>
  );
}

export default App;
