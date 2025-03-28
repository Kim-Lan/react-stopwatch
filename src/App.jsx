import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;
    if (!isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const hours = Math.floor(time / (60 * 60 * 1000));
  const minutes = Math.floor(time / (60 * 1000)) % 60;
  const seconds = Math.floor(time / 1000) % 60;
  const milliseconds = time % 1000;

  function handleStart() {
    setIsPaused(false);
  }

  function handlePause() {
    setIsPaused(true);
  }

  function handleReset() {
    setTime(0);
  }

  return (
    <>
      <h1>React Stopwatch</h1>
      <h2>
        { hours.toString().padStart(2, '0') }:
        { minutes.toString().padStart(2, '0') }:
        { seconds.toString().padStart(2, '0') }.
        { (milliseconds / 10).toString().padStart(2, '0') }
      </h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
