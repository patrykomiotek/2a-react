import "./App.css";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

function App() {
  const handleClickOne = () => {
    alert("Hello world!");
  };

  const handleClickTwo = () => {
    alert("Hello Techni!");
  };

  return (
    <div>
      <Text>Hello World!</Text>
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
