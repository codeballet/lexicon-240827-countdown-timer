import { ReactElement, useEffect, useRef, useState } from "react";

export function CountdownTimer(): ReactElement {
    const [timeLeft, setTimeLeft] = useState(3);
    const [isActive, setIsActive] = useState(false);
    const currentTime = useRef(0);

    useEffect(() => {
        if (isActive) {
            currentTime.current = timeLeft;
            const timerInterval = setInterval(() => {
                if (currentTime.current > 0) {
                    setTimeLeft((timeLeft) => timeLeft - 1);
                    currentTime.current = currentTime.current - 1;
                }
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    }, [isActive]);

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(3);
    };

    const handleStart = () => {
        setIsActive(true);
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <h2>{timeLeft} seconds left</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
