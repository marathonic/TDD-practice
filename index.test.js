import {caesar, capitalize, oneCalc, reverseString} from ".";

test('capitalise the first character', () => {
    expect(capitalize('hello')).toMatch('Hello')
});

test('strings are reversed successfully', () => {
    expect(reverseString('abc')).toMatch('cba');
})

// test('Calculator adds 1 + 2 to equal 3', () => {
//     let calc = new Calculator(1,2);
//     expect(calc.add()).toBe(3);
// })

test('new Calculator adds 1 + 2 to equal 3', () => {
    oneCalc.x = 1;
    oneCalc.y = 2;
    expect(oneCalc.add()).toBe(3);
})

test('new Calculator subtracts 10 - 3 to equal 7', () => {
    oneCalc.x = 10;
    oneCalc.y = 3;
    expect(oneCalc.subtract()).toBe(7);
})

test('new Calculator divides 100 / 10 to equal 10', () => {
    oneCalc.x = 100;
    oneCalc.y = 10;
    expect(oneCalc.divide()).toBe(10);
})

test('new Calculator multiplies 3 * 6 to equal 18', () => {
    oneCalc.x = 3;
    oneCalc.y = 6;
    expect(oneCalc.multiply()).toBe(18);
})

test('Caesar cipher encodes 3 steps back', () => {
    expect(caesar('de')).toMatch('ab');
})

test('Cipher wraps around alphabet', () => {
    expect(caesar('za')).toMatch('wx');
})

test('Cipher respects case', () => {
    expect(caesar('DeE')).toMatch('AbB');
})

test('Cipher respects spaces', () => {
    expect(caesar('C D')).toMatch('Z A');
})