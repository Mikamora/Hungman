import { TimerWrapper } from "./styles"

interface TimerProps {
  children: string;
}

const Timer = ({children}: TimerProps) => {
  return (
    <TimerWrapper>{children}</TimerWrapper> 
  )
};

export default Timer;
