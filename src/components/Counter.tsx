import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounting/updating");
    const id = setInterval(() => {
      // setCount(count + 1);
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("unmounting");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
