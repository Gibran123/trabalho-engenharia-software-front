import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "../base.service";
import { Dica } from "./models/dica.model";

@Injectable()
export class DicaService extends BaseService<Dica> {

  dicas: Array<Dica> = [
    { id: 1, title: 'Title 1', description: 'Dica 1' },
    { id: 2, title: 'Title 2', description: 'Dica 2' },
    { id: 3, title: 'Title 3', description: 'Dica 3' },
    { id: 4, title: 'Title 4', description: 'Dica 4' },
    { id: 5, title: 'Title 5', description: 'Dica 5' },
  ];

  constructor(public http: HttpClient) {
    super('dicas', http);
  }

  getAllDicas() {
    return [...this.dicas];
  }
}