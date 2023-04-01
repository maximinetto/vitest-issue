import { useState, useEffect } from "react";

function ExampleComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("Hello, world!");
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <div>{message}</div>;
}

export default ExampleComponent;
