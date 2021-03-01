import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div class="card-text">
          {anomalies.map((anomaly) => (
              <div class="card-text">{anomaly}</div>
          ))}
        </div>
      )
    };

    export default Anomalies