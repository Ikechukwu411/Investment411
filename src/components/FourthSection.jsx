import React, { useState, useEffect } from "react";
import "../components/FourthSection.css";
// import "bulma/css/bulma.min.css";

const coinSymbols = [
  "bitcoin",
  "ethereum",
  "ripple",
  "litecoin",
  "cardano",
  "polkadot",
  "chainlink",
  "stellar",
  "dogecoin",
  "solana",
  "usd-coin",
];

const coinImage = [
  "https://assets.coincap.io/assets/icons/btc@2x.png",
  "https://assets.coincap.io/assets/icons/eth@2x.png",
  "https://assets.coincap.io/assets/icons/usdt@2x.png",
  "https://assets.coincap.io/assets/icons/bnb@2x.png",
  "https://assets.coincap.io/assets/icons/xrp@2x.png",
  "https://assets.coincap.io/assets/icons/usdc@2x.png",
  "https://assets.coincap.io/assets/icons/sol@2x.png",
  "https://assets.coincap.io/assets/icons/ada@2x.png",
  "https://assets.coincap.io/assets/icons/doge@2x.png",
  "https://assets.coincap.io/assets/icons/trx@2x.png",
];

const FourthSection = () => {
  const [coinData, setCoinsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = coinSymbols.map((symbol) =>
          fetch(`https://api.coincap.io/v2/assets/`)
            .then((response) => response.json())
            .then((result) => result.data)
        );

        const data = await Promise.all(requests);
        setCoinsData(data.slice(0, 10)); // Get data for a minimum of 10 coins
        setLoading(false);
        console.log(coinData);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <section className="section fourthsec_bg">
        <div className="container box">
          <h1
            className="is-size-2-desktop is-size-4-mobile has-text-centered mb-5"
            style={{ color: "#5E17EB" }}
          >
            Crypto Real -Time Data
          </h1>
          {coinData.length > 0 ? (
            <table
              className="table is-fullwidth is-striped is-hoverable"
              style={{ color: "black" }}
            >
              <thead className="is-size-3-desktop is-size-4-mobile">
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Price (USD)</th>
                  <th className="is-hidden-mobile">Market Cap</th>
                  <th className="is-hidden-mobile">Supply</th>
                  <th className="is-hidden-mobile">Symbol</th>
                </tr>
              </thead>
              <tbody>
                {coinData.map((coin, index) => (
                  <tr key={coin.id} className="is-size-4">
                    <td>{index + 1}</td>
                    <td>
                      <div className="crypto-info">
                        <img
                          src={coinImage[index]}
                          width={20}
                          alt={`${coin[index].name} icon`}
                          className="crypto-icon"
                        />
                        {coin[index].name}
                      </div>
                    </td>
                    <td>${parseFloat(coin[index].priceUsd).toFixed(2)}</td>
                    <td className="is-hidden-mobile">
                      {parseFloat(coin[index].marketCapUsd).toFixed(2)}
                    </td>
                    <td className="is-hidden-mobile">
                      {parseFloat(coin[index].supply).toFixed(2)}
                    </td>
                    <td className="is-hidden-mobile">{coin[index].symbol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No data available</div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default FourthSection;
