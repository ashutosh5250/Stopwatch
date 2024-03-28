import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  const handleClick = (e) => {
    if (e.target.value === "start") {
      setStart(true);
    } else if (e.target.value === "stop") {
      setStart(false);
    } else {
      setStart(false);
      setTime(0);
    }
  };

  const formattedTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(1, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formattedTime(time)}</p>
      {start ? (
        <button value="stop" onClick={handleClick}>
          Stop
        </button>
      ) : (
        <button value="start" onClick={handleClick}>
          Start
        </button>
      )}
      <button value="reset" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}

export default App;
