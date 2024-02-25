import { useMemo, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);

  let count = useMemo(() => {
    let result = 0;
    for (let i = 1; i <= input; i++) {
      result = result + i;
    }
    return result;
  }, [input]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        name="input"
        id="input"
        onInput={(e) => setInput(e.target.value)}
      />
      <br />
      <input type="button" value="Show Sum" />
      <br />
      <label htmlFor="input">The Sum is {count}</label>
      <br />
      <ButtonComponent onClick={() => console.log("Button Clicked")}>
        Click Me
      </ButtonComponent>
    </div>
  );
}

const ButtonComponent = memo(({ onClick, children }) => {
  console.log("ButtonComponent render");
  return <button onClick={onClick}>{children}</button>;
});

export default App;
