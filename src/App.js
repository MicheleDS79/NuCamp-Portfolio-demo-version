import GameCard from "./GameCard";

const gamesList = [ // This format is strictly an example from the Video - Compile your own!
  {
    id: 0,
    name: "Scythe",
    rating: null,
    category: "Fun"
  },
  {
    id: 0,
    name: "Machi Koro",
    rating: null,
    category: "Fun"
  },
  {
    id: 0,
    name: "Galaxy Trucker",
    rating: null,
    category: "Fun"
  },
]

function App() {
  return (
    <div>
      <h1>My Board Games</h1>
      { gamesList.map( g => <GameCard game={g} />)}
    </div>
  );
}

export default App;
