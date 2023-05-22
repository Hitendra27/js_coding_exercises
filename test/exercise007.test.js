import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,

} from '../challenges/exercise007-optional'

describe("sumDigits", () => {
    test("returns the sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(723).toBe(12));
    })
});

describe("createRange", () => {
    test("crates a range of number as an array", () => {
        expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    })
});

describe("getScreenTimeAlertList", () => {
    test(" return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
        expect(getScreentimeAlertList()).toBe()
    })
});

describe("hexToRGB", () => {
    test("convert each hexadecimal value for R, G and B into its decimal equivalent!", () => {
        expect(hexToRGB()).toBe()
    })
});

describe("findWinnner", () => {
    test("return X if player X has won, 0 if the player 0 has won", () => {
        expect(findWinner()).toBe()
    });
    test("return null if there is currently no winner", () => {
        expect(findWinner()).toBe()
    })
});

