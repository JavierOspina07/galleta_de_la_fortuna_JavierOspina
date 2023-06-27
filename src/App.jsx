import "./App.css";
import phrases from "./data/phrases.json"
import GameCard from './/components/GameCard'
import { useState } from "react";

function App() {

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
