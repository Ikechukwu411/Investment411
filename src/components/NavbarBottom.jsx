import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../components/NavbarBottom.css";

const NavbarBottom = () => {
  const [coins, setCoins] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Clone the first coin and append it to the end
      setCoins((coins) => [...coins, coins[0]]);
    }, 2000); // Adjust the interval for desired animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar navbar-fixed-bottom">
      <ul className="navbar1" ref={containerRef}>
        {coins.map((coin) => (
          <li key={coin.id} className="navbar-item" id="navbar1">
            <img src={coin.image} alt={coin.name} />
            <span id="Col">{coin.name}</span>
            <span>${parseFloat(coin.price_usd).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarBottom;
