import {
    FormEvent,
    FormEventHandler,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react";
import { Button } from "./Button";

export function CountdownTimer(): ReactElement {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [time, setTime] = useState<number | string>("");
    const [timeLeft, setTimeLeft] = useState<number>(60);

    const timerId = useRef<number>();

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(60);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        console.log("Form submitted");

        setTimeLeft(time as number);
        setTime("");
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
            <form className="time__form" onSubmit={handleSubmit}>
                <label htmlFor="time">Set timer</label>
                <input
                    onChange={(e) => setTime(parseInt(e.target.value))}
                    placeholder="seconds"
                    type="number"
                    value={time}
                />
            </form>
        </div>
    );
}
