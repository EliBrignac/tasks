import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [stu, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [editMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit mode check"
                label="edit mode"
                inline
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEditMode(event.target.checked)
                }
            />
            <div>
                <Form.Group controlId="editName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        hidden={!editMode}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                        disabled={!editMode}
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="student?"
                    inline
                    checked={stu}
                    disabled={!editMode}
                    hidden={!editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setStudent(event.target.checked)
                    }
                />
                {name} is {stu ? "" : "not"} a Student
            </div>
        </div>
    );
}
