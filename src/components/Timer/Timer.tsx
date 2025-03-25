import { useEffect, useState } from "react";
import { TimerWrapper } from "./styles";

interface TimerProps {
  isPlaying: boolean;
}

const Timer = ({ isPlaying }: TimerProps) => {
  // Timer states
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Use effect to start the timer on page load & update it every second
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!isPlaying) {
      setIsRunning(false);
    } else {
      setTime(0);
      setIsRunning(true);
    }
  }, [isPlaying]);

  // Format the timer into minutes:seconds
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <TimerWrapper>Timer: {formatTime(time)}</TimerWrapper>
    </div>
  );
};

export default Timer;
