import "./App.css";
import { useState } from "react";
import { v4 as uuiv4 } from "uuid";
// import { Button } from "./ui/Button";
// import { Text } from "./ui/Text";
// import { MagicButton } from "./ui/MagicButton";
import { RegistrationForm } from "./components/RegistrationForm";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs";
import { Viewport } from "./components/Viewport";
import { Counter } from "./components/Counter";
import { Characters } from "./components/Characters";

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
    <div className="container">
      <Characters />
      {/* <Counter /> */}
      {/* <Viewport /> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <RegistrationForm /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <Text>{uuid}</Text>
      <Text>Count: {count}</Text>
      <div>
        <Button label="Click" onClick={handleClickOne} />
        <Button label="Click me again" onClick={handleClickTwo} />
      </div>
      <div>
        <MagicButton label="Magic Button" onClick={handleClickTwo} />
        <MagicButton label="Magic Button" onClick={handleClickTwo} />
      </div> */}
    </div>
  );
}

export default App;
