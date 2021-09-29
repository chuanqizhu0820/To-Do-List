const add = require("./tasks");

test("add", () => {
    expect(add(1, 2)).toBe(3);
})