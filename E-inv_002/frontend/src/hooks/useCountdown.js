import { useState, useEffect } from "react";

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculate = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return false;
      }

      const totalSeconds = Math.floor(difference / 1000);
      setTimeLeft({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        isComplete: false,
      });
      return true;
    };

    const keepGoing = calculate();
    if (!keepGoing) return;

    const timer = setInterval(() => {
      const active = calculate();
      if (!active) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

