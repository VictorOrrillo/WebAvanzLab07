const {numPar} = require('../utils/for_testing')

test('la funcion square esta correcta', () => {
    expect(numPar(2)).toBe(true);
    expect(numPar(5)).toBe(false);
    expect(numPar(19)).toBe(false);
    expect(numPar(100)).toBe(true);
});