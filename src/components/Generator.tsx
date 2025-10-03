import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";

export function Generator() {
  const [id, setId] = useState(uuidv4()); // 0 - current state value, 1 - callback to change the state

  const handleIdChange = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <Text>{id}</Text>
      <Button label="Regenerate" onClick={handleIdChange} />
    </div>
  );
}
