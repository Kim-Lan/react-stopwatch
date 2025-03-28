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
    <div className="m-8 flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">
        { hours.toString().padStart(2, '0') }:
        { minutes.toString().padStart(2, '0') }:
        { seconds.toString().padStart(2, '0') }.
        { (milliseconds / 10).toString().padStart(2, '0') }
      </h1>
      <div className="flex gap-3">
        <button
          className="border rounded px-2 py-1 hover:bg-gray-200 active:bg-gray-400"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="border rounded px-2 py-1 hover:bg-gray-200 active:bg-gray-400"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="border rounded px-2 py-1 hover:bg-gray-200 active:bg-gray-400"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
