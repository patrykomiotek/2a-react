import "./App.css";
import { useState } from "react";
import { v4 as uuiv4 } from "uuid";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";
import { MagicButton } from "./ui/MagicButton";

function App() {
  // let count = 0;
  const [uuid, setUuid] = useState(uuiv4());
  const [count, setCount] = useState(0); // 0 - initial value
  // const state = useState(0); // 0 - initial value
  // state[0] - value
  // state[1] - callback

  const handleClickOne = () => {
    // alert("Hello world!");
    // count = count + 1;
    setCount((currentValue) => currentValue + 1);
    console.log({ count });
    setUuid(uuiv4());
  };

  const handleClickTwo = () => {
    // alert("Hello Techni!");
    // count = count + 1;
    setCount((currentValue) => currentValue + 1);
    console.log({ count });
  };

  return (
    <div>
      <Text>{uuid}</Text>
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
      <MagicButton
        label="Magic Button"
        onClick={handleClickTwo}
        bgColor="carrot"
        color="emerald"
      />
      <MagicButton
        label="Magic Button"
        onClick={handleClickTwo}
        bgColor="carrot"
        color="emerald"
      />
    </div>
  );
}

export default App;
