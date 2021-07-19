//Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('ABner', 'Borda', 'Fonseca', 'cristine');
const upper = concatenaStrings('a', 'b', 'c', 'd');

console.log(result);
console.log(concatenacao);
console.log(upper);
