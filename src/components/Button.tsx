import { ReactElement } from "react";

interface IButtonProps {
    icon: string;
    onClick: () => void;
}

export function Button(props: IButtonProps): ReactElement {
    return (
        <button className="button" onClick={props.onClick}>
            <span className="material-symbols-outlined">{props.icon}</span>
        </button>
    );
}
