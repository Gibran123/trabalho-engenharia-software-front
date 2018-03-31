import { Injectable } from "@angular/core";

import { BaseService } from "../base.service";
import { Maquina } from "./models/maquina.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MaquinaService extends BaseService<Maquina> {

  private maquinas: Array<Maquina> = [
    { id: 1, name: 'Maquina 1' },
    { id: 2, name: 'Maquina 2' },
    { id: 3, name: 'Maquina 3' },
    { id: 4, name: 'Maquina 4' },
    { id: 5, name: 'Maquina 5' },
  ];

  constructor(public http: HttpClient) {
    super('maquinas', http);
  }

  getAllMaquinas() {
    return [...this.maquinas];
  }
}