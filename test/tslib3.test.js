const tslib3 = require("tslib3")

describe(`tslib3`, () => {
    test("default", () => {
        expect(tslib3.sum(1, 1)).toBe(2)
    })
})
