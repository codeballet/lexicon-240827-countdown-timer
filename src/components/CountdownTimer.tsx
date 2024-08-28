import { ReactElement, useEffect, useRef, useState } from "react";

export function CountdownTimer(): ReactElement {
    const [timeLeft, setTimeLeft] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const currentTime = useRef(null);

    useEffect(() => {
        if (isActive) {
            const timerInterval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    }, [isActive]);

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(60);
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
