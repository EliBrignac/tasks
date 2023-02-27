import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter((q: Question): boolean => q.published);
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const non_empty = questions.filter(
        (q: Question): boolean =>
            !(q.body === "" && q.expected === "" && q.options.length === 0)
    );
    return non_empty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.filter((q: Question): boolean => q.id === id);
    if (found.length != 0) {
        return found[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removed = questions.filter((q: Question): boolean => q.id !== id);
    return removed;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((q: Question): string => q.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (total: number, q: Question) => total + q.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published_q = getPublishedQuestions(questions);
    const sum = sumPoints(published_q);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const titles = "id,name,options,points,published\n";
    const csv_q = questions
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");
    return titles + csv_q;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const published_q = questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
    return published_q;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const q1 = questions[0].type;
    const same = questions.every((q: Question): boolean => q.type === q1);
    return same;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    let new_qs = questions.map((q: Question): Question => ({ ...q }));
    new_qs = [...new_qs, makeBlankQuestion(id, name, type)];
    return new_qs;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    //  You can't use the Find Question function cause it can return NULL and you get red lines and your code looks bad
    let dc = questions.map((q: Question): Question => ({ ...q }));
    const found = dc.filter((q: Question): boolean => q.id === targetId);
    const found_q = found[0];

    const dc_q = { ...found_q };
    dc_q.name = newName;
    dc = questions.map(
        (q: Question): Question => (q.id === dc_q.id ? dc_q : q)
    );

    return dc;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    //If a test fails, use the findQuestion function you wrote
    let dc = questions.map((q: Question): Question => ({ ...q }));
    // const found_q = findQuestion(dc, targetId); You can't use this cause it can return NULL and you get red lines

    const found = dc.filter((q: Question): boolean => q.id === targetId);
    const found_q = found[0];

    const dc_q = { ...found_q };
    if (
        dc_q.type === "multiple_choice_question" &&
        newQuestionType !== "multiple_choice_question"
    ) {
        dc_q.type = newQuestionType;
        dc_q.options = [];
    } else {
        dc_q.type = newQuestionType;
    }
    dc_q.type = newQuestionType;
    dc = questions.map(
        (q: Question): Question => (q.id === dc_q.id ? dc_q : q)
    );

    return dc;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const edited_dc = questions.map((q: Question): Question => {
        if (q.id !== targetId) {
            return q;
        }
        let newOptions: string[];
        if (targetOptionIndex === -1) {
            newOptions = [...q.options, newOption];
        } else {
            newOptions = [
                //We can't use splice because splice mutates the array
                // while slice creates a new array (deep copy)
                ...q.options.slice(0, targetOptionIndex),
                newOption,
                ...q.options.slice(targetOptionIndex + 1)
            ];
        }
        return { ...q, options: newOptions };
    });
    return edited_dc;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const dup_dc = questions
        .map((q: Question): Question[] => {
            if (q.id === targetId) {
                const new_q = duplicateQuestion(newId, q);
                return [q, new_q];
            } else {
                return [q];
            }
        })
        .flat();
    return dup_dc;
}
