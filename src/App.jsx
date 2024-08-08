import { useState } from 'react'
import './App.css'

function App() {
  const [count1, team1] = useState(0);
  const [count2, team2] = useState(0);


  function addTeam2(num){
    team2(count2 + num)
  }
  function addTeam1(num){
    team1(count1 + num)
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
            <button onClick={()=>addTeam1(3)}>+3</button>
            <button onClick={()=>addTeam1(2)}>+2</button>
            <button onClick={()=>addTeam1(1)}>+1</button>
            <p>|</p>
            <button onClick={()=>addTeam2(1)}>+1</button>
            <button onClick={()=>addTeam2(2)}>+2</button>
            <button onClick={()=>addTeam2(3)}>+3</button>
        </div>
    </div>
    </>
  )
}

export default App
