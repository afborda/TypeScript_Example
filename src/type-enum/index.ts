enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}
//2 ENUM COM NOMES IGUAL VAO SE JUNTAR

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores[0]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores['ROXO']);
