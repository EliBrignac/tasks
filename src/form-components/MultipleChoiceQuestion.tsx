import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    function changeAns(event: React.ChangeEvent<HTMLSelectElement>): void {
        setAns(event.target.value);
    }
    return (
        <div>
            <h3> Multiple Choice Question</h3>
            <Form.Group controlId="ChooseSomethinHomie">
                <Form.Label>Choose Wisely🤺🦉🤔</Form.Label>
                <Form.Select value={ans} onChange={changeAns}>
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
