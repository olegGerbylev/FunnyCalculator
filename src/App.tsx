import { useState } from "react";
import Calculator from "./calculator/Calculator";
import Game from "./game/Game";
import './App.css'

function App() {

  const [result, setResult] = useState('')
  const [isGameStart, setIsgameStart] = useState(false)

  return (
    <div className="App">
      {isGameStart ?
        <>
          <Game setResult={setResult} setIsgameStart={setIsgameStart} result={result}/>
        </>
        :
          <Calculator result={result} setResult={setResult} setIsgameStart={setIsgameStart}/>
      }
    </div>
  );
}

export default App;
