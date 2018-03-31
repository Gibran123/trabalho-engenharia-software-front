import { Component, OnInit } from '@angular/core';

import { Dica } from '../models/dica.model';
import { DicaService } from '../dica.service';

@Component({
  selector: 'app-dica-lista',
  templateUrl: './dica-lista.component.html',
  styleUrls: ['./dica-lista.component.css']
})
export class DicaListaComponent implements OnInit {

  columns: Array<string>;
  dicas: Array<Dica>;

  constructor(private dicaService: DicaService) { }

  ngOnInit() {
    this.columns = [
      'Título',
      'Descrição',
      'Ações'
    ];

    this.dicas = this.dicaService.getAllDicas();
  }
}
