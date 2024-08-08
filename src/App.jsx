import { useState } from 'react'
import './App.css'

function App() {
  const [count1, team1] = useState(0);
  const [count2, team2] = useState(0);

  function team1Add1(){
    team1(count1 + 1)
  }
  function team1Add2(){
    team1(count1 + 2)
  }
  function team1Add3(){
    team1(count1 + 3)
  }

  function team2Add1(){
    team2(count2 + 1)
  }
  function team2Add2(){
    team2(count2 + 2)
  }
  function team2Add3(){
    team2(count2 + 3)
  }
  return (
    <>
      <div className="scoreBoardContainer">
        <div className="scores">
            <p>Team one </p>
            <div id="team1">{count1}</div>
            <p>:</p>
            <div id="team2">{count2}</div>
            <p>Team two</p>
        </div>
        <div className="points">
            <button onClick={team1Add3}>+3</button>
            <button onClick={team1Add2}>+2</button>
            <button onClick={team1Add1}>+1</button>
            <p>|</p>
            <button onClick={team2Add1}>+1</button>
            <button onClick={team2Add2}>+2</button>
            <button onClick={team2Add3}>+3</button>
        </div>
    </div>
    </>
  )
}

export default App
