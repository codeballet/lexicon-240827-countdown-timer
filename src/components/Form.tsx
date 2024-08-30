import { FormEvent, ReactElement } from "react";

interface IPropsForm {
    onChange: (num: number) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    time: number;
}

export function Form(props: IPropsForm): ReactElement {
    return (
        <form
            action="#"
            className="time__form"
            onSubmit={(e) => props.onSubmit(e)}
        >
            <label htmlFor="time">Timer interval</label>
            <input
                onChange={(e) => props.onChange(parseInt(e.target.value))}
                placeholder="seconds"
                type="number"
                value={props.time}
            />
            <button type="submit">
                <span className="material-symbols-outlined">publish</span>
            </button>
        </form>
    );
}
