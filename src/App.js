import React, { useState, useEffect } from "react";
import Loading from "./components/ui/Loading";
import Body from "./components/body/Body";

import WebFont from "webfontloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    WebFont.load({
      // Add the font families you are using in your Body component
      // Replace 'Font1' and 'Font2' with the actual font families
      // you are using for the Body component
      custom: {
        families: ["Courier New", "BROKAT v1.0"],
      },
      active: () => {
        setLoading(false);
      },
    });
  }, []);

  return <div className="app">{loading ? <Loading /> : <Body />}</div>;
}

export default App;
