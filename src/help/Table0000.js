import React from "react";
import MyWallet from "./MyWallet";
function Table({ plates = [], isBalance, onAddFund }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${isBalance} remaining!</h1>
      <div className="table">
        <MyWallet onAddFund={onAddFund} />.
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
