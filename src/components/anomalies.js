import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div>
          {anomalies.map((anomaly) => (
            <div class="card">
              <div class="card-body">
                <div class="card-text">{anomaly}</div>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Anomalies