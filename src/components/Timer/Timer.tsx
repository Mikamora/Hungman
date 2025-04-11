import { useEffect, useState } from "react";
import { TimerWrapper } from "./styles";

interface TimerProps {
  isPlaying: boolean;
  isDaily?: boolean;
}

const Timer = ({ isPlaying, isDaily }: TimerProps) => {
  // Timer states
  // Potentially add prop for whether it's the daily or unlimited -> saves to localhost if it's the daily, doesn't matter for unlimited ( see LetterButton for example )
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [dailyTime, setDailyTime] = useState(
    JSON.parse(window.localStorage.getItem("dailyTimer") || "0")
  );

  // Use effect to start the timer on page load & update it every second
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      isDaily
        ? setDailyTime((dailyTime: number) => dailyTime + 1)
        : setTime((prevTime: number) => prevTime + 1);
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

  useEffect(() => {
    isDaily && window.localStorage.setItem("dailyTimer", dailyTime);
  }, [dailyTime]);

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
      <TimerWrapper>
        Timer: {formatTime(isDaily ? dailyTime : time)}
      </TimerWrapper>
    </div>
  );
};

export default Timer;
