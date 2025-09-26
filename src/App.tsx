import "./App.css";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

function App() {
  return (
    <div>
      <Text>Hello World!</Text>
      <Button label="Click" bgColor="clouds" color="peter-river" />
      <Button label="Click me again" bgColor="carrot" color="emerald" />
    </div>
  );
}

export default App;
