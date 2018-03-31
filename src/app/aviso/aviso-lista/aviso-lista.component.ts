import { Component, OnInit } from '@angular/core';

import { Aviso } from '../models/aviso.model';
import { AvisoService } from '../aviso.service';

@Component({
  selector: 'app-aviso-lista',
  templateUrl: './aviso-lista.component.html',
  styleUrls: ['./aviso-lista.component.css']
})
export class AvisoListaComponent implements OnInit {

  columns: Array<string>;
  avisos: Array<Aviso>;

  constructor(private avisoService: AvisoService) { }

  ngOnInit() {
    this.columns = [
      'Título',
      'Descrição',
      'Ações'
    ];

    this.avisos = this.avisoService.getAllAvisos();
  }
}
