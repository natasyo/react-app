import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "next/image";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Image
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            height={viteLogo.height}
            width={viteLogo.width}
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <Image
            src={reactLogo}
            className="logo react"
            alt="React logo"
            height={reactLogo.height}
            width={reactLogo.width}
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
