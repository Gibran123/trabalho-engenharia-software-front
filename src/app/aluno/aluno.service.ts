import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "../base.service";
import { Aluno } from "./models/aluno.model";
import { Endereco } from "./models/endereco.model";

@Injectable()
export class AlunoService extends BaseService<Aluno> {

  private alunos: Array<Aluno> = [
    { id: 1, name: 'Aluno 1', email: 'aluno1@gmail.com', address: new Endereco('Rua 1', 'Bairro 1', '1') },
    { id: 2, name: 'Aluno 2', email: 'aluno2@gmail.com', address: new Endereco('Rua 2', 'Bairro 2', '2') },
    { id: 3, name: 'Aluno 3', email: 'aluno3@gmail.com', address: new Endereco('Rua 3', 'Bairro 3', '3') },
    { id: 4, name: 'Aluno 4', email: 'aluno4@gmail.com', address: new Endereco('Rua 4', 'Bairro 4', '4') },
    { id: 5, name: 'Aluno 5', email: 'aluno5@gmail.com', address: new Endereco('Rua 5', 'Bairro 5', '5') },
  ];

  constructor(public http: HttpClient) {
    super('alunos', http);
  }

  getAllAlunos() {
    return [...this.alunos];
  }
}