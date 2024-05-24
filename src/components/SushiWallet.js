import React, { useState } from "react";

function SushiWallet({ onAddBalance }) {
  const [amount, setAmount] = useState(0);
  function handleAddAmount(e) {
    e.preventDefault();
    onAddBalance(amount);
    setAmount(0);
  }
  return (
    <form onSubmit={handleAddAmount}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <input type="submit" />
    </form>
  );
}

export default SushiWallet;
