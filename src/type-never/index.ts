//never é usado quando a função nunca vai retonar nada ( normalmente usada para função que retorna erro)

export function criarErro(): never {
  throw new Error('Erro qualquer');
}

criarErro();
