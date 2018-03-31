import { Component, OnInit, style } from '@angular/core';

import { MaquinaService } from '../maquina.service';
import { Maquina } from '../models/maquina.model';

@Component({
  selector: 'app-maquina-lista',
  templateUrl: './maquina-lista.component.html',
  styleUrls: ['./maquina-lista.component.css']
})
export class MaquinaListaComponent implements OnInit {
  columns: Array<string>;
  maquinas: Array<Maquina>;

  constructor(private maquinaService: MaquinaService) { }

  ngOnInit() {
    this.columns = [
      'Nome',
      'Ações',
    ];

    this.maquinas = this.maquinaService.getAllMaquinas();
  }
}
