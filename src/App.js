import React from "react";
import MainRouters from "./routers/MainRouters";
import disableDevtool from "disable-devtool";

function App() {
  // disableDevtool();
  return (
    <div className="App">
      <MainRouters />
    </div>
  );
}

export default App;
