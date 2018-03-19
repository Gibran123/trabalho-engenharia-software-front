import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario/models/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-ficha-form',
  templateUrl: './ficha-form.component.html',
  styleUrls: ['./ficha-form.component.css']
})
export class FichaFormComponent implements OnInit {

  usuarios: Array<Usuario>;

  constructor(private usuariosService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getAllUsers();
  }

}
