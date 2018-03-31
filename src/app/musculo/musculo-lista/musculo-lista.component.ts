import { Component, OnInit, style } from '@angular/core';

import { MusculoService } from '../musculo.service';
import { Musculo } from '../models/musculo.model';

@Component({
  selector: 'app-musculo-lista',
  templateUrl: './musculo-lista.component.html',
  styleUrls: ['./musculo-lista.component.css']
})
export class MusculoListaComponent implements OnInit {
  columns: Array<string>;
  musculos: Array<Musculo>;

  constructor(private musculoService: MusculoService) { }

  ngOnInit() {
    this.columns = [
      'Nome',
      'Ações',
    ];

    this.musculos = this.musculoService.getAllMusculos();
  }
}
