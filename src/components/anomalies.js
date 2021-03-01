import React from 'react'

    const Anomalies = ({ anomalies }) => {
      return (
        <div class="card-text">
          {anomalies.map((anomaly) => (
              {anomaly}
          ))}
        </div>
      )
    };

    export default Anomalies