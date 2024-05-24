import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import SushiWallet from "./SushiWallet";

function SushiContainer({ sushis, onHandleEatenSushi, onAddBalance }) {
  const [index, setIndex] = useState(0);
  function handleSushiIndex() {
    setIndex(index + 4);
  }
  const displaySushis = sushis
    .slice(index, index + 4)
    .map((sushi) => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        onHandleEatenSushi={onHandleEatenSushi}
      />
    ));
  return (
    <div className="belt">
      {displaySushis}
      <SushiWallet onAddBalance={onAddBalance} />
      <MoreButton onHandleIndex={handleSushiIndex} />
    </div>
  );
}

export default SushiContainer;
