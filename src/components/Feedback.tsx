import { ReactElement } from "react";

interface IFeedbackProps {
    feedback: string;
}

export function Feedback({ feedback }: IFeedbackProps): ReactElement {
    return <p className="feedback">{feedback}</p>;
}
