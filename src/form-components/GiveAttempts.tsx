import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [req, setReq] = useState<number>(0);
    function gain(): void {
        setAttempts(isNaN(req) ? attempts : attempts + req);
    }
    function use(): void {
        setAttempts(attempts <= 0 ? 0 : attempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attempts}</span>
            <Form.Group controlId="CheeseBalls">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    min="0"
                    type="number"
                    value={req}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReq(event.target.valueAsNumber)
                    }
                />
            </Form.Group>
            <Button onClick={gain}>gain</Button>
            <Button onClick={use} disabled={attempts === 0}>
                use
            </Button>
        </div>
    );
}
