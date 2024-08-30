import { ReactElement } from "react";

interface ICountdownProps {
    timeLeft: number;
}

export function Countdown({ timeLeft }: ICountdownProps): ReactElement {
    return <h2>{timeLeft} seconds left</h2>;
}
