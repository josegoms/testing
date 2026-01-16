import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./testing";

test('returns with first letter capitalized', () => {
    expect(capitalize('javascript')).toBe('Javascript');
    expect(capitalize('Hey')).toBe('Hey');
    expect(capitalize('hELLO')).toBe('HELLO');
});

test('is the string reversed?', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Hey')).toBe('yeH');
    expect(reverseString('JoSé')).toBe('éSoJ');
});

test('Does it sum properly?', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(9, 1)).toBe(10);
});

test('Does it subtract properly?', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
    expect(calculator.subtract(5, 5)).toBe(0);
    expect(calculator.subtract(2, 5)).toBe(-3);
});

test('Does it divide properly?', () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
    expect(calculator.divide(8, 4)).toBe(2);
    expect(calculator.divide(2, 1)).toBe(2);
    expect(calculator.divide(6, 12)).toBeCloseTo(0.5);
});

test('Does it multiply properly?', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(15, 3)).toBe(45);
    expect(calculator.multiply(1, 0)).toBe(0);
});

test('Does it cipher properly?', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('ABC', 3)).toBe('DEF');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
    expect(caesarCipher('aBc', 3)).toBe('dEf');
    expect(caesarCipher('AbC', 3)).toBe('DeF');
    expect(caesarCipher('heLLo', 3)).toBe('khOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Does ir return the array properties?', () => {
    expect(analyzeArray([2, 4, 6, 8, 10])).toEqual({average: 6, max: 10, min: 2, length: 5});
    expect(analyzeArray([42])).toEqual({average: 42, max: 42, min: 42, length: 1});
    expect(analyzeArray([-5, -10, 0, 5, 10])).toEqual({average: 0, max: 10, min: -10, length: 5});
    expect(analyzeArray([])).toEqual({average: null, max: null, min: null, length: 0});
    expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({average: 2.5, max: 3.5, min: 1.5, length: 3});
    expect(analyzeArray([0, 0, 0, 0])).toEqual({average: 0, max: 0, min: 0, length: 4});
    expect(analyzeArray([-1, -2, -3, -4])).toEqual({average: -2.5, max: -1, min: -4, length: 4});
    expect(analyzeArray([100, 50, 75])).toEqual({average: 75, max: 100, min: 50, length: 3});
    expect(analyzeArray([10, 9, 8, 7, 6, 5])).toEqual({average: 7.5, max: 10, min: 5, length: 6});
});