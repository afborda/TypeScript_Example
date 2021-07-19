const dadosCliente1: readonly [number, string] = [1, 'ABner']; //nâo pode ser modificado
const dadosCliente2: [number, string, string] = [1, 'ABner', 'fonseca'];
const dadosCliente3: [number, string, string?] = [1, 'ABner', 'fonseca'];
const dadosCliente4: [number, string, ...string[]] = [1, 'ABner', 'fonseca'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Abner';

// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ['Abner', 'Fonseca'];
const array2: ReadonlyArray<string> = ['ABner', 'Fonseca'];

console.log(array1);
console.log(array2);
