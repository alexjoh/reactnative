import { sum } from './sum';

test('adds 1 + 2 to equal 3 in TScript', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3 in JavaScript', () => {
    expect(sum(1, 2)).toBe(3);
});