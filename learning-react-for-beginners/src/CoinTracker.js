import React, { useEffect, useLayoutEffect, useState } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item, idx) => (
            <option>
              {item.name}({item.symbol}): {item.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </section>
  );
};

export default CoinTracker;
