import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [q, setQuestion] = useState<QuestionType>("short_answer_question");

    function ChangeType(): void {
        setQuestion(
            q === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }

    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            {q === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
}
