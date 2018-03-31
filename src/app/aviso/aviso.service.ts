import { Injectable } from "@angular/core";

import { BaseService } from "../base.service";
import { Aviso } from "./models/aviso.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AvisoService extends BaseService<Aviso> {

  private avisos: Array<Aviso> = [
    { id: 1, title: 'Aviso 1', description: 'Descrição 1' },
    { id: 2, title: 'Aviso 2', description: 'Descrição 2' },
    { id: 3, title: 'Aviso 3', description: 'Descrição 3' },
    { id: 4, title: 'Aviso 4', description: 'Descrição 4' },
    { id: 5, title: 'Aviso 5', description: 'Descrição 5' },
  ];

  constructor(public http: HttpClient) {
    super('avisos', http);
  }

  getAllAvisos() {
    return [...this.avisos];
  }
}