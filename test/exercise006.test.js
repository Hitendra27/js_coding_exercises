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
    test("cover all the areas", () => {
        expect(areWeCovered()).toBe()
    })
});