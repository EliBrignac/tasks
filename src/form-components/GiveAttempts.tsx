import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    function updateReq(event: React.ChangeEvent<HTMLInputElement>) {
        setReq(event.target.value);
    }
    function gain(req: string) {
        if (!isNaN(+req)) {
            const x = +req;
            setAttempts(attempts + x);
        }
    }
    function use() {
        setAttempts(attempts - 1);
    }

    const [attempts, setAttempts] = useState<number>(3);
    const [req, setReq] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Number of attempts left: {attempts}</p>
            <Form.Group controlId="CheeseBalls">
                <Form.Control type="number" value={req} onChange={updateReq} />
            </Form.Group>
            <Button onClick={use} disabled={attempts <= 0}>
                use
            </Button>
            <Button onClick={() => gain(req)}>gain</Button>
            <div></div>
        </div>
    );
}
