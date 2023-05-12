const {esHiato} = require('../utils/for_testing')

test("devuelve true para palabras con hiato", () => {
    expect(esHiato("maíz")).toBe(false);
    expect(esHiato("aire")).toBe(true);
    expect(esHiato("país")).toBe(false);
    expect(esHiato("poeta")).toBe(true);
});