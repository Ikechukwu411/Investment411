import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

const TradingView = () => {
  const onLoadScriptRef = useRef();
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_228a9") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_228a9",
        });
      }
    }
  }, []);

  return (
    <React.Fragment>
      <section className="section jobber">
        <div className="container has-text-centered-mobile">
          <h2 className="is-size-3">Trading View Chart</h2>
          <div
            className="tradingview-widget-container"
            style={{ height: "100%", width: "100%" }}
          >
            <div
              id="tradingview_228a9"
              style={{ height: 500, width: "100%" }}
            />
            <div className="tradingview-widget-copyright">
              <a href="https://www.tradingview.com/" rel="noopener nofollow">
                <span className="blue-text">
                  Track all markets on TradingView
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TradingView;
