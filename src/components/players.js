import React from 'react'

    const Players = ({ players }) => {
      return (
        <div>
          <center><h1>Anomalies</h1></center>
          {players.map((player) => (
            <div class="card">
              <div class="card-body">
                <p class="card-text">Anomaly score: {player.score}</p>
                <div style="color: red">Detected abnormal player metrics, minute: {player.score}</div>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Players