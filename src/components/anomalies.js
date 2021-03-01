import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div class="card-text">
          <h2 class="card-title">Looking for Insights...</h2>
          {anomalies.map((anomaly) => (
              <div class="card-text">{anomaly}</div>
          ))}
        </div>
      )
    };

    export default Anomalies