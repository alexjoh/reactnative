import { sum } from './sum';

export function sub(a: number, b: number): number {
    return sum(a, -b);
}

