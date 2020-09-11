import React from "react";

const Alerts = ({ alerts }) => {
  return (
    <>
      {alerts.length > 0 &&
        alerts.map(alert => (
          <div className='container-fluid'>
            <div key={alert.id} className={`alert alert-${alert.type}`}>
              {alert.msg}
            </div>
          </div>
        ))}
    </>
  );
};

export default Alerts;
