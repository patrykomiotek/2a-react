import "./App.css";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // 0 - initial value
  // const state = useState(0); // 0 - initial value
  // state[0] - value
  // state[1] - callback

  const handleClickOne = () => {
    // alert("Hello world!");
    // count = count + 1;
    setCount((currentValue) => currentValue + 1);
    console.log({ count });
  };

  const handleClickTwo = () => {
    // alert("Hello Techni!");
    // count = count + 1;
    setCount((currentValue) => currentValue + 1);
    console.log({ count });
  };

  return (
    <div>
      <Text>Count: {count}</Text>
      <Button
        label="Click"
        onClick={handleClickOne}
        bgColor="clouds"
        color="peter-river"
      />
      <Button
        label="Click me again"
        onClick={handleClickTwo}
        bgColor="carrot"
        color="emerald"
      />
    </div>
  );
}

export default App;
