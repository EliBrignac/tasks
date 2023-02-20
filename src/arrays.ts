/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const l = numbers.length;
    if (l === 1) {
        return [numbers[0], numbers[0]];
    } else if (l === 0) {
        return [];
    } else {
        return [numbers[0], numbers[l - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripple = numbers.map((n: number): number => n * 3);
    return tripple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const helper = [...numbers];
    const filtered_nums = helper.map((n: string): number =>
        !isNaN(+n) ? +n : 0
    );
    return filtered_nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const new_a = amounts.map((num: string): string => {
        return num.includes("$") ? num.substring(1, num.length) : num;
    });
    const new_b = new_a.map((n: string): number => (!isNaN(+n) ? +n : 0));
    return new_b;
    // let new_a = amounts.map((num: string): string => {
    //     return num.includes("$") ? num.substring(1, num.length) : num;
    // });
    // const n = new_a.map((num: string): number => {
    //     return typeof num === "number" ? +num : 0;
    // });
    // return n;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered_nums = messages.filter(
        (m: string): boolean => !m.includes("?")
    );
    const h = filtered_nums.map((mess: string): string =>
        mess.includes("!") ? mess.toUpperCase() : mess
    );
    return h;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filtered = words.filter((w: string): boolean => w.length < 4);
    return filtered.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const ans = sum.toString() + "=" + addends.join("+");
    return ans;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const new_v = [...values];
    let i = new_v.findIndex((val: number): boolean => val < 0);
    if (i === -1) {
        i = new_v.length;
    }
    const first = new_v.slice(0, i);
    const sum = first.reduce((total: number, num: number) => total + num, 0);
    new_v.splice(i + 1, 0, sum);
    return new_v;
}
