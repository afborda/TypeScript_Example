type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; //and

const pessoa1: Pessoa = {
  nome: 'Abner',
  sobrenome: 'Fonseca',
  idade: 26,
};

console.log(pessoa1);
