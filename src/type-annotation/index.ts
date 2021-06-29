/*eslint-disable */

//Não inverir tipos como esta abixo pois  o typescript é inteligente para isso

let nome: string = 'Abner fonseca'; // qualuqer tipo de strings
let idade: number = 26; //Qualquer tipo de numero
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

//arrays
let arrayNumero: Array<number> = [1, 2, 4];
let arrayNumero2: number[] = [1, 2, 4];
let arrayStrings: Array<string> = ['a', 'b'];
let arrayStrings2: string[] = ['a', 'b'];

//objetos

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'Abner fonseca',
};
