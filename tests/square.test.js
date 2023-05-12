const {square} = require('../utils/for_testing');

test('la funcion square esta correcta', () => {
    expect(square(25)).toBe(5);
    expect(square(36)).toBe(6);
    expect(square(49)).toBe(7);
});