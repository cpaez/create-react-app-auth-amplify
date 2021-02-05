import React from 'react'

    const Players = ({ players }) => {
      return (
        <div>
          <center><h1>Players List</h1></center>
          {players.map((player) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Messi (10)</h5>
                <p class="card-text">Anomaly score: {player.score}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Players