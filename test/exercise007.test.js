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

describe('getScreentimeAlertList', () => {
    test('returns an array of usernames with total usage > 100 for a specific date', () => {
      const users = [
          {
           username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
           },
           {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                   ]
          },
     ]
  
      const date = "2019-05-04";
      const result = getScreentimeAlertList(users, date);
      expect(result).toEqual(["beth_1234"]);
    });
  
    test('returns an empty array when no users have total usage > 100 for a specific date', () => {
      const users = [
        {
          username: "john_doe",
          name: "John Doe",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 20, instagram: 30, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 15, instagram: 20, facebook: 25} },
            { date: "2019-05-03", usage: { twitter: 10, instagram: 15, facebook: 20} },
          ]
        },
        {
          username: "jane_smith",
          name: "Jane Smith",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
          ]
        }
      ];
  
      const date = "2019-05-04";
      const result = getScreentimeAlertList(users, date);
      expect(result).toEqual([]);
    });
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

