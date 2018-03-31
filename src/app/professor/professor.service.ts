import { Injectable } from "@angular/core";

import { BaseService } from "../base.service";
import { Professor } from "./models/professor.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProfessorService extends BaseService<Professor> {

  private professores: Array<Professor> = [
    { id: 1, name: 'Professor 1', email: 'professor1@gmail.com', cpf: '111-111-111-11' },
    { id: 2, name: 'Professor 2', email: 'professor2@gmail.com', cpf: '222-222-222-22' },
    { id: 3, name: 'Professor 3', email: 'professor3@gmail.com', cpf: '333-333-333-33' },
    { id: 4, name: 'Professor 4', email: 'professor4@gmail.com', cpf: '444-444-444-44' },
    { id: 5, name: 'Professor 5', email: 'professor5@gmail.com', cpf: '555-555-555-55' },
  ];

  constructor(public http: HttpClient) {
    super('professores', http);
  }

  getAllProfessores() {
    return [...this.professores];
  }
}