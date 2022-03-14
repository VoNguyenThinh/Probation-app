import React from "react";
import MainRouters from "./routers/MainRouters";
import disableDevtool from "disable-devtool";
import "antd/dist/antd.css";

function App() {
  // disableDevtool();
  return (
    <div className="App">
      <MainRouters />
    </div>
  );
}

export default App;
