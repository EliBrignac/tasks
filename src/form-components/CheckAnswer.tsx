import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="IThinkThisCanBeAnything">
                <Form.Label>
                    Give Answer to the Ultimate Question of Life, the Universe,
                    and Everything:
                </Form.Label>
                <Form.Control
                    value={ans}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
