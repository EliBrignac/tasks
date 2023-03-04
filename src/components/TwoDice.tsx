import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setValue1] = useState<number>(1);
    const [d2, setValue2] = useState<number>(0);

    const rollLeft = (): void => {
        setValue1(d6());
    };
    const rollRight = (): void => {
        setValue2(d6());
    };

    return (
        <>
            <span>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </span>
            <span>left-die {d1}</span>
            <span>right-die {d2}</span>
            <span>{d1 === d2 ? "Win" : "Lose"}</span>
        </>
    );
}
