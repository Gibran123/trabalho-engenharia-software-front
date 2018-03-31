import { Injectable } from "@angular/core";

import { BaseService } from "../base.service";
import { Exercicio } from "./models/exercicio.model";
import { HttpClient } from "@angular/common/http";
import { Maquina } from "../maquina/models/maquina.model";
import { Musculo } from "../musculo/models/musculo.model";

@Injectable()
export class ExercicioService extends BaseService<Exercicio> {

  private exercicios: Array<Exercicio> = [
    { id: 1, machine: new Maquina('Maquina 1'), muscle: new Musculo('Musculo 1'), description: 'Descrição 1' },
    { id: 2, machine: new Maquina('Maquina 2'), muscle: new Musculo('Musculo 2'), description: 'Descrição 2' },
    { id: 3, machine: new Maquina('Maquina 3'), muscle: new Musculo('Musculo 3'), description: 'Descrição 3' },
    { id: 4, machine: new Maquina('Maquina 4'), muscle: new Musculo('Musculo 4'), description: 'Descrição 4' },
    { id: 5, machine: new Maquina('Maquina 5'), muscle: new Musculo('Musculo 5'), description: 'Descrição 5' },
  ];

  constructor(public http: HttpClient) {
    super('exercicios', http);
  }

  getAllExercicios() {
    return [...this.exercicios];
  }
}