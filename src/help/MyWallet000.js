import React, { useState } from "react";

function MyWallet({ onAddFund }) {
  const [amount, setAmount] = useState(0);
  function handleAddFund(e) {
    e.preventDefault();
    onAddFund(parseInt(amount));
    setAmount(0);
  }
  return (
    <form onSubmit={handleAddFund}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
export default MyWallet;
