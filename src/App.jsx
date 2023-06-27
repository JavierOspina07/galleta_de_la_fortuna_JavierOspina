import "./App.css";
import GameCard from "./components/gameCard.jsx";
import phrases from "./data/phrases.json"
import { useState } from "react";

function App() {

  console.log(phrases[0])

  const [index, setIndex] = useState(0)

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length));
  };
  
  return (
    <>
      <GameCard 
      data={phrases[index]}
      />

      <button onClick={changePhrase} className="btn__fortune">fortuna</button>
    </>
  );
}

export default App;
