import { Component, OnInit } from '@angular/core';

import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {

  columns: Array<string>;
  alunos: Array<Aluno>;

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.columns = [
      'Nome',
      'Email',
      'Endereço',
      'Ações'
    ];

    this.alunos = this.alunoService.getAllAlunos();
  }

  displayAddress(aluno: Aluno) {
    return `${aluno.address.street}, ${aluno.address.district}, ${aluno.address.number}`;
  }
}
