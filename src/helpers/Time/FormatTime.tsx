// Format the timer into minutes:seconds
export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const formatTimeWords = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return minutes === 0
    ? `${seconds.toString()} seconds`
    : `${minutes.toString()} minutes and ${seconds.toString()} seconds`;
};
