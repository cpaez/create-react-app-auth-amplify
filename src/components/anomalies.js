import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div class="card-text">
          {anomalies.map((anomaly) => (
              <div style="color: red; font-size: 12px">{anomaly}</div>
          ))}
        </div>
      )
    };

    export default Anomalies