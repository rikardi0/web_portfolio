import React, { useState, useEffect } from "react";
import Loading from "./components/ui/Loading";
import Body from "./components/body/Body";
import Bounce from "react-reveal/Bounce";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        <div className="app-body">
          <Bounce duration={1400} bottom>
            <Body />
          </Bounce>
        </div>
      )}
    </div>
  );
}

export default App;
