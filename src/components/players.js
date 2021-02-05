import React from 'react'

    const Players = ({ players }) => {
      return (
        <div>
          <center><h1>Players List</h1></center>
          {players.map((player) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Messi</h5>
                <h6 class="card-subtitle mb-2 text-muted">10</h6>
                <p class="card-text">Anomaly score: {player.score}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Players