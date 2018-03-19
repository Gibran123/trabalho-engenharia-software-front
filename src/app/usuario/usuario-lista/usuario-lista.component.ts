import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  columns: Array<string>;
  usuarios: Array<Usuario>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.columns = [
      'Nome',
      'Email',
      'Ações',
    ]

    this.usuarios = this.usuarioService.getAllUsers();
  }

}
