import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base.service';
import { Usuario } from './models/usuario.model';

@Injectable()
export class UsuarioService extends BaseService<Usuario> {

  private usuarios: Array<Usuario> = [
    { id: 1, name: 'Gibran1', email: 'gibran1@gmail.com', senha: '' },
    { id: 2, name: 'Gibran2', email: 'gibran2@gmail.com', senha: '' },
    { id: 3, name: 'Gibran3', email: 'gibran3@gmail.com', senha: '' },
    { id: 4, name: 'Gibran4', email: 'gibran4@gmail.com', senha: '' },
    { id: 5, name: 'Gibran5', email: 'gibran5@gmail.com', senha: '' },
    { id: 6, name: 'Gibran6', email: 'gibran6@gmail.com', senha: '' },
    { id: 7, name: 'Gibran7', email: 'gibran7@gmail.com', senha: '' },
    { id: 8, name: 'Gibran8', email: 'gibran8@gmail.com', senha: '' },
    { id: 9, name: 'Gibran9', email: 'gibran9@gmail.com', senha: '' },
  ];

  constructor(public http: HttpClient) {
    super('users', http);
  }

  getAllUsers() {
    return [...this.usuarios];
  }
}