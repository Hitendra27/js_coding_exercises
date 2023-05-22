import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,

} from '../challenges/exercise006';

describe("sumMultiples", () => {
    test("add the sum of arrays", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    })
});

describe("isValidDNA", () => {
    test("returns true for a valid DNA string", () => {
        expect(isValidDNA(isValidDNA("CGTA"))).toBe(true);
        expect(isValidDNA(isValidDNA("ACTG"))).toBe(true);
    });

    test("returns false for a invalid DNA string", () => {
        expect(isValidDNA(isValidDNA("CGTB"))).toBe(false);
        expect(isValidDNA(isValidDNA("GATTACA134"))).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("returns the complementary DNA string for a valid input", () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
        expect(getComplementaryDNA('GCTA')).toBe('CGAT');
    });
});

describe("isItPrime", () => {
    test("returns false if number is 1 or < 1", () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(-2)).toBe(false);
    });

    test("returns true if it is a prime nuber", () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(-2)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("create a matrix", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo']
        ]);
    });

});

describe("areWeCovered", () => {
    test("it returns if there are not staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("returns false if there are staff but < 3 not scheduled to work", () => {
        const staff = [
            {name: "Smith", rota: ["Tuesday", "Thursday"]},
            {name: "James", rota: ["Tuesday", "Thursday"]},
            {name: "Joe", rota: ["Tuesday", "Thursday"]},
            {name: "Sarah", rota: ["Tuesday", "Thursday"]},
            {name: "Carlos", rota: ["Tuesday", "Thursday"]}
        ];
        expect(areWeCovered(staff, "Thurday")).toBe(false);
    })
});