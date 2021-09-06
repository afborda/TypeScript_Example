//Forma Longa de definir
export class Empresa {
  public readonly name: string; //publix não é necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

//forma curta de criar class typeScript
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Abner', 'Fonseca');
const colaborador2 = new Colaborador('Abner2', 'Fonseca2');
const colaborador3 = new Colaborador('Abner3', 'Fonseca3');

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);

console.log(empresa1);

empresa1.mostrarColaboradores();
