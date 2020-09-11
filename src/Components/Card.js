import React, { useState, useEffect } from "react";

import helpers from "../helpers/helper";

const Cards = ({ tasks }) => {
  const [xcards, setXcard] = useState([
    { title: "t1", amount: 1 },
    { title: "t2", amount: 2 },
  ]);
  useEffect(() => {
    setXcard(helpers.categorizedTask(tasks));
    console.log(tasks);
  }, []);

  return (
    <div className='d-flex'>
      {xcards != null && xcards != undefined && xcards.length > 0 && (
        <>
          {xcards.map(card => (
            <div>
              <h4>{card.title}</h4>
              <small>{card.amount}</small>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cards;
