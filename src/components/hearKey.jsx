import React, { useState, useEffect } from "react";

export default function HearKey() {
  const [keyPressed, setKeyPressed] = useState(null);

  useEffect(() => {
    function handleKeyPress(event) {
      setKeyPressed(event.key);
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>Última tecla presionada: {keyPressed}</h1>
    </div>
  );
}
