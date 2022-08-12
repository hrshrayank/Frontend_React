import React from "react";
import styles from "./styles/Card.module.css";

export const Card = ({ address, pools, total_childs }) => {
  var pool = pools;
  // console.log(pool);
  var total = 0;
  {
    const json = JSON.stringify(pool);
    pool.map((items, j) => {
      var amount = JSON.parse(items.staked_amount);
      total = total + amount;
    });
    // console.log(total);
  }
  return (
    <div className={styles.card} onClick={() => alert("Hello from here")}>
      <div className={styles.content}>
        <h5>Address:{address}</h5>
        <p>Total Staked:{total}</p>
        <p>Total Children:{total_childs}</p>
      </div>
    </div>
  );
};
