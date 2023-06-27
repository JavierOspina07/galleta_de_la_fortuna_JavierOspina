import "./App.css";
import phrases from "./data/phrases.json"
import GameCard from './/components/GameCard'
import { useState } from "react";

function App() {

  const images = [ 
    '../public/img/fondo1.png',
    '../public/img/fondo1.png',
    '../public/img/fondo2.png',
    '../public/img/fondo2.png',
    '../public/img/fondo3.png',
    '../public/img/fondo3.png',
    '../public/img/fondo4.png',
    '../public/img/fondo5.png',
    '../public/img/fondo5.png',
    '../public/img/fondo6.png',
    '../public/img/fondo6.png',
    '../public/img/fondo7.png',
    '../public/img/fondo7.png',
    '../public/img/fondo8.png',
    '../public/img/fondo8.png',
  ]
  const [index, setIndex] = useState(0)

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length));
  };


  document.body.style = `background: url(${images[index]}) no-repeat center center fixed; background-size: cover; text-align: center`;

  
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
