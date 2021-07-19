const objetoA: {
  readonly chaveA: string; // nao pode mais mudar de o valor
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'Outro Valor';
