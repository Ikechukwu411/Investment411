import React, { useEffect } from "react";

const GoogleTranslateWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr", "de", "it", "es"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GoogleTranslateWidget;
