import React, { useEffect } from "react";
import "../App.css";

// const Binance = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.9.min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
//   return (
//     <div className="binance-widget-container">
//       <div
//         className="binance-widget-marquee"
//         data-cmc-ids="1,1027,1839,5426,52,3408,74,5805,3890,7083"
//         data-theme="dark"
//         data-transparent="false"
//         data-locale="en"
//       ></div>
//     </div>
//   );
// };
const Binance = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.9.min.js";
    script.async = true;

    script.onload = () => {
      const binanceWidget = document.querySelector(".binance-widget-marquee");
      if (binanceWidget) {
        // Remove Powered by Binance and disclaimer
        binanceWidget.innerHTML = binanceWidget.innerHTML.replace(
          /Powered by Binance|Disclaimer/g,
          ""
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="binance-widget-container">
      <div
        className="binance-widget-marquee"
        data-cmc-ids="1,1027,1839,5426,52,3408,74,5805,3890,7083"
        data-theme="dark"
        data-transparent="false"
        data-locale="en"
      ></div>
    </div>
  );
};

export default Binance;
