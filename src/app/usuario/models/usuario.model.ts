export class Usuario {
  id: number;
  name: string;
  email: string;
  senha: string;

  constructor(name = '') {
    this.name = name;
  }
}