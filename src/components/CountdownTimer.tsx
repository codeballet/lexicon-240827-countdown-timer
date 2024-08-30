import {
    FormEvent,
    FormEventHandler,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react";
import { Button } from "./Button";
import { Countdown } from "./Countdown";
import { Feedback } from "./Feedback";
import { Form } from "./Form";

export function CountdownTimer(): ReactElement {
    const [duration, setDuration] = useState<number>(60);
    const [feedback, setFeedback] = useState<string>("");
    const [isActive, setIsActive] = useState<boolean>(false);
    const [time, setTime] = useState<number | string>("");
    const [timeLeft, setTimeLeft] = useState<number>(duration);

    const timerId = useRef<number>();

    const handleReset = () => {
        setFeedback("");
        setIsActive(false);
        setTimeLeft(duration);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setDuration(time as number);
        setTime("");
        setTimeLeft(time as number);
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
            setFeedback("Your time is up!");
            setIsActive(false);
        }
    }, [timeLeft]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <Countdown timeLeft={timeLeft} />
            <Button icon="restart_alt" onClick={handleReset} />
            <Button
                icon={isActive ? "pause" : "play_arrow"}
                onClick={() => setIsActive((ia) => !ia)}
            />
            <Form
                onChange={setTime}
                onSubmit={handleSubmit}
                time={time as number}
            />
            <Feedback feedback={feedback} />
        </div>
    );
}
