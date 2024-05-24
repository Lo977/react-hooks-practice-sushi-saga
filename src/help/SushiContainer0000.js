import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [isIndex, setIsIndex] = useState(0);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handlePageViewLimit() {
    setIsIndex(isIndex + 4);
  }
  const displaySushi = sushis
    .slice(isIndex, isIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ));
  return (
    <div className="belt">
      {displaySushi}
      <MoreButton OnPageView={handlePageViewLimit} />
    </div>
  );
}

export default SushiContainer;
