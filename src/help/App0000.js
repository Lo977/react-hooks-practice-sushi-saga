import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [isBalance, setIsBalance] = useState(100);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  console.log(sushis);
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        const sushiData = data.map((sushi) => {
          return { ...sushi, isEaten: false };
        });
        setSushis(sushiData);
      });
  }, []);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleEatenSushi(eatenSushi) {
    const remainingBalance = isBalance - eatenSushi.price;
    if (remainingBalance >= 0) {
      const updatedPlates = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return { isEaten: true };
        } else {
          return sushi;
        }
      });
      setSushis(updatedPlates);
      setIsBalance(remainingBalance);
    } else {
      alert("Add More Money");
    }
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleAddFund(amount) {
    setIsBalance(isBalance + amount);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  const empltyPlates = sushis.filter((sushi) => sushi.isEaten);
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatenSushi} />
      <Table
        plates={empltyPlates}
        isBalance={isBalance}
        onAddFund={handleAddFund}
      />
    </div>
  );
}

export default App;
