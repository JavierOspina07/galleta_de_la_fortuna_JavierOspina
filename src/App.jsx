import "./App.css";
import phrases from "./data/phrases.json";
import GameCard from "./components/GameCard";
import { useState } from "react";

function App() {
  const images = [
    "../img/fondo1.png",
    "../img/fondo1.png",
    "../img/fondo2.png",
    "../img/fondo2.png",
    "../img/fondo3.png",
    "../img/fondo3.png",
    "../img/fondo4.png",
    "../img/fondo5.png",
    "../img/fondo5.png",
    "../img/fondo6.png",
    "../img/fondo6.png",
    "../img/fondo7.png",
    "../img/fondo7.png",
    "../img/fondo8.png",
    "../img/fondo8.png",
  ];
  const [index, setIndex] = useState(0);

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length));
  };

  document.body.style = `background: url(${images[index]}) no-repeat center center fixed; 
  background-size: cover; text-align: center`;

  return (
    <>
      <GameCard data={phrases[index]} />

      <button onClick={changePhrase} className="btn__fortune">
        fortuna
      </button>
    </>
  );
}

export default App;
