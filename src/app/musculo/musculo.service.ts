import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "../base.service";
import { Musculo } from "./models/musculo.model";

@Injectable()
export class MusculoService extends BaseService<Musculo> {

  private musculos: Array<Musculo> = [
    { id: 1, name: 'Musculo 1' },
    { id: 2, name: 'Musculo 2' },
    { id: 3, name: 'Musculo 3' },
    { id: 4, name: 'Musculo 4' },
    { id: 5, name: 'Musculo 5' },
  ];

  constructor(public http: HttpClient) {
    super('musculos', http);
  }

  getAllMusculos() {
    return [...this.musculos];
  }
}