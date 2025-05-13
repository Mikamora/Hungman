import { useEffect, useState } from "react";
import { TimerWrapper } from "./styles";
import { formatTime } from "../../helpers/Time/FormatTime";

interface TimerProps {
  isPlaying: boolean;
  isDaily?: boolean;
  reportTime?: (timer: number) => void;
}

const Timer = ({ isPlaying, isDaily, reportTime }: TimerProps) => {
  // Timer states
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
        : setTime((prevTime: number) => {
            reportTime && reportTime(prevTime + 1);
            return prevTime + 1;
          });
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

  return (
    <div>
      <TimerWrapper>
        Timer: {formatTime(isDaily ? dailyTime : time)}
      </TimerWrapper>
    </div>
  );
};

export default Timer;
