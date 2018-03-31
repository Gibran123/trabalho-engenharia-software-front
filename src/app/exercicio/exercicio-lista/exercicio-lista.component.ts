import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../models/exercicio.model';
import { ExercicioService } from '../exercicio.service';

@Component({
  selector: 'app-exercicio-lista',
  templateUrl: './exercicio-lista.component.html',
  styleUrls: ['./exercicio-lista.component.css']
})
export class ExercicioListaComponent implements OnInit {
  columns: Array<string>;
  exercicios: Array<Exercicio>;

  constructor(private exercicioService: ExercicioService) { }

  ngOnInit() {
    this.columns = [
      'Máquina',
      'Músculo',
      'Descrição',
      'Ações'
    ];

    this.exercicios = this.exercicioService.getAllExercicios();
  }
}
