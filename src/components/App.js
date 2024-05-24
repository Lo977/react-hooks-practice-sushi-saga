import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [balance, setBalance] = useState(50);
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((datas) => {
        const updatedSushi = datas.map((sushi) => {
          return { ...sushi, isEaten: false };
        });
        setSushis(updatedSushi);
      });
  }, []);

  function handleAddBalance(amount) {
    setBalance(balance + amount);
  }

  function handleEatenSushi(eatenSushi) {
    const remainderBalance = balance - eatenSushi.price;
    if (remainderBalance >= 0) {
      const updateSushi = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return { isEaten: true };
        } else {
          return sushi;
        }
      });
      setSushis(updateSushi);
      setBalance(remainderBalance);
    } else {
      alert("plase add more balance");
    }
  }
  const emptyPlates = sushis.filter((sushi) => sushi.isEaten === true);
  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        onHandleEatenSushi={handleEatenSushi}
        onAddBalance={handleAddBalance}
      />

      <Table balance={balance} plates={emptyPlates} />
    </div>
  );
}

export default App;
