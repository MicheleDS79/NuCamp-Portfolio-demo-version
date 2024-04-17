import { useState } from "react";
import { TEST_GAMES } from "./components/TEST_GAMES";
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";


function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES)

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/random">Random</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <h1>My Board Games</h1>
      <Link to="/" className="btn-link me-3">Home</Link>
      <Link to="random" >Random</Link>
      <Routes>
        <Route path="/" element={<HomePage gamesList={gamesList} />} />
        <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
        <Route path="/games:gameId" element={<GamePage gamesList={gamesList} />} />
      </Routes>
    </div>
  );
}

export default App;
