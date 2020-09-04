import React from "react";
import * as HOOKS from "./custom-hooks";
import "./App.css";


const HOOKS_KEY = Object.keys(HOOKS);

function App() {
  const [currentHook, setHook] = React.useState(HOOKS[HOOKS_KEY[1]]);
  return (
    <div>
      <select
        onChange={(e) => {
          setHook(HOOKS[e.target.value]);
        }}
      >
        {HOOKS_KEY.map((hook) => (
          <option value={hook} key={hook}>
            {hook}
          </option>
        ))}
      </select>
      <div>{currentHook}</div>
    </div>
  );
}

export default App;
