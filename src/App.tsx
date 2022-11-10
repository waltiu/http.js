import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { jsonp } from "./lib";
import "./App.css";

function App() {
  const requestData = async () => {
  const result=  await jsonp(`https://www.baidu.com/sugrec?prod=pc&wd=2222`);
  console.log(result,'result')
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => requestData()}>测试请求</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
