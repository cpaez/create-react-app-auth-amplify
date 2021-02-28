import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div>
          <center><h1>Anomalies</h1></center>
          {anomalies.map((anomaly) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{anomaly}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Anomalies