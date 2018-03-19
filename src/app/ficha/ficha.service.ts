import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "../base.service";
import { Ficha } from "./models/ficha.model";
import { Usuario } from "../usuario/models/usuario.model";

@Injectable()
export class FichaService extends BaseService<Ficha> {

  fichas: Array<Ficha> = [
    { id: 1, user: new Usuario('Gibran'), description: 'Ficha 1' },
    { id: 2, user: new Usuario('Gibran'), description: 'Ficha 2' },
    { id: 3, user: new Usuario('Gibran'), description: 'Ficha 3' },
    { id: 4, user: new Usuario('Gibran'), description: 'Ficha 4' },
    { id: 5, user: new Usuario('Gibran'), description: 'Ficha 5' },
  ];

  constructor(public http: HttpClient) {
    super('fichas', http);
  }

  getAllFichas() {
    return [...this.fichas];
  }
}