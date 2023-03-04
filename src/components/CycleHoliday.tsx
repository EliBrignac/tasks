import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const alpha = [
        "Christmas",
        "Halloween",
        "Independence Day",
        "New Year's Day",
        "Thanksgiving"
    ];
    const alpha_emoji = ["🎄", "🎃", "🦅", "🎉", "🦃"];
    const year = [
        "New Year's Day",
        "Independence Day",
        "Halloween",
        "Thanksgiving",
        "Christmas"
    ];
    const year_emoji = ["🎉", "🦅", "🎃", "🦃", "🎄"];
    const [alpha_i, setValue1] = useState<number>(0);
    const [year_i, setValue2] = useState<number>(0);

    const cycleAlpha = (): void => {
        setValue1(alpha_i === 4 ? 0 : alpha_i + 1);
    };
    const cycleYear = (): void => {
        setValue2(year_i === 4 ? 0 : year_i + 1);
    };

    return (
        <span>
            <Button onClick={cycleAlpha}>Alphabet Cycle</Button>
            Current Alphabetical Year Holiday: {alpha[alpha_i]}{" "}
            {alpha_emoji[alpha_i]}
            <Button onClick={cycleYear}>Year Cycle</Button>
            Current Year Holiday: {year[year_i]} {year_emoji[year_i]}
        </span>
    );
}
