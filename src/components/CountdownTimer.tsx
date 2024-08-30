import { ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "./Button";

const TIME = 60;

export function CountdownTimer(): ReactElement {
    const [timeLeft, setTimeLeft] = useState(TIME);
    const [isActive, setIsActive] = useState(false);

    const timerId = useRef<number>();

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(TIME);
    };

    useEffect(() => {
        if (isActive) {
            timerId.current = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        }

        if (!isActive) {
            clearInterval(timerId.current);
        }
    }, [isActive]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsActive(false);
        }
    }, [timeLeft]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <h2>{timeLeft} seconds left</h2>
            <Button icon="restart_alt" onClick={handleReset} />
            <Button
                icon={isActive ? "pause" : "play_arrow"}
                onClick={() => setIsActive((ia) => !ia)}
            />
        </div>
    );
}
