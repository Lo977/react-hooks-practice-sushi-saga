import React from "react";

function Sushi({ sushi, onEatSushi }) {
  function handleClick() {
    if (!sushi.isEaten) {
      console.log(!sushi.isEaten);
      onEatSushi(sushi);
    } else {
      alert("plase dont eat the empty plates");
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
