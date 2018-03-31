import { Component, OnInit } from '@angular/core';

import { ExercicioService } from '../exercicio.service';
import { MaquinaService } from '../../maquina/maquina.service';
import { MusculoService } from '../../musculo/musculo.service';
import { Maquina } from '../../maquina/models/maquina.model';
import { Musculo } from '../../musculo/models/musculo.model';

@Component({
  selector: 'app-exercicio-form',
  templateUrl: './exercicio-form.component.html',
  styleUrls: ['./exercicio-form.component.css']
})
export class ExercicioFormComponent implements OnInit {

  maquinas: Array<Maquina>;
  musculos: Array<Musculo>;

  constructor(private exercicioService: ExercicioService,
    private maquinaService: MaquinaService,
    private musculoService: MusculoService) { }

  ngOnInit() {
    this.maquinas = this.maquinaService.getAllMaquinas();
    this.musculos = this.musculoService.getAllMusculos();
  }

}
