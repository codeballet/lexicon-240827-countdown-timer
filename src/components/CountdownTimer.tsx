import { ReactElement, useEffect, useRef, useState } from "react";

export function CountdownTimer(): ReactElement {
    const [timeLeft, setTimeLeft] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const currentTime = useRef(timeLeft);

    useEffect(() => {
        if (isActive) {
            setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        }
    });

    const handlePauseTimer = () => {
        currentTime.current = timeLeft;
        setIsActive(false);
    };

    const handleStartTimer = () => {
        setTimeLeft(currentTime.current);
        setIsActive(true);
    };

    const handleReset = () => {
        currentTime.current = 60;
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <h2>{timeLeft} seconds left</h2>
            <button onClick={handleStartTimer}>Start</button>
            <button onClick={handlePauseTimer}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
