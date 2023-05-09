import React, { useState, useEffect } from "react";
import Loading from "./components/ui/Loading";
import Body from "./components/body/Body";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  return <div className="app">{loading ? <Loading /> : <Body />}</div>;
}

export default App;
