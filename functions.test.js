const functions = require("./functions");

test("Adds 2+2 = 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2 to not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
//toBeTruthy
test('Should be truthy', () => {
    expect(functions.checkValue(true)).toBeTruthy();
});
//toEqual
test('User should be Lucia Puccini', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Lucia',
        lastName: 'Puccini'
    });
});

// Less than and greater than
test('should be under 1600', () => {
    const load1 = 800;
    const loan2 = 700;
    expect(load1 + loan2).toBeLessThan(1600);
});

//Regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});
//arrays
test('Admin should be in usernames', () => {
    usernames = ['jose', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});