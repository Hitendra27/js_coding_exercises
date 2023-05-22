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
    test("checks for DNA", () => {
        expect(isValidDNA()).toBe();
    })
});

describe("getComplementaryDNA", () => {
    test("get DNA", () => {
        expect(getComplementaryDNA()).toBe();
    })
});

describe("isItPrime", () => {
    test("is it a prime number return true or else false", () => {
        expect(isItPrime()).toBe()
    })
});

describe("createMatrix", () => {
    test("create a matrix", () => {
        expect(createMatrix()).toBe()
    })
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