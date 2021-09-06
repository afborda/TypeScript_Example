type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarela' | 'Preta';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type corPreferida = CorRGB | CorCMYK;

const pessoa1: Pessoa = {
  nome: 'Abner fonseca',
  idade: 30,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa1, 'Azul'));
