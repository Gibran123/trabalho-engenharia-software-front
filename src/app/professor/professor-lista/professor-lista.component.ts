import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html',
  styleUrls: ['./professor-lista.component.css']
})
export class ProfessorListaComponent implements OnInit {

  columns: Array<string>;
  professores: Array<Professor>;

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.columns = [
      'Nome',
      'Email',
      'CPF',
      'Ações',
    ]

    this.professores = this.professorService.getAllProfessores();
  }
}
