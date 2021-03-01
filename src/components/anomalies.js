import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div class="card-text">
          <h5 class="card-title">Buscando Insights...</h5>
          {anomalies.map((anomaly) => (
              <div class="card-text">{anomaly}</div>
          ))}
        </div>
      )
    };

    export default Anomalies