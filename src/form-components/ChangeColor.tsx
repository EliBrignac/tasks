import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "pink"
];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<number>(0);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>): void {
        const new_color = COLORS.indexOf(event.target.value);
        setColor(new_color);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((col: string) => (
                <Form.Check
                    inline
                    key={col}
                    type="radio"
                    name="colors"
                    onChange={changeColor}
                    id={col}
                    label={col}
                    value={col}
                    checked={col === COLORS[color]}
                />
            ))}
            <div>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: COLORS[color] }}
                >
                    Color:
                    {"  " + COLORS[color]}
                </div>
            </div>
        </div>
    );
}
