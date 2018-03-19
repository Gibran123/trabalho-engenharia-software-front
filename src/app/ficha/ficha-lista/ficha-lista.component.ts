import { Component, OnInit } from '@angular/core';
import { Ficha } from '../models/ficha.model';
import { FichaService } from '../ficha.service';

@Component({
  selector: 'app-ficha-lista',
  templateUrl: './ficha-lista.component.html',
  styleUrls: ['./ficha-lista.component.css']
})
export class FichaListaComponent implements OnInit {

  columns: Array<string>;
  fichas: Array<Ficha>;

  constructor(private fichaService: FichaService) { }

  ngOnInit() {
    this.columns = [
      'Descrição',
      'Usuário',
      'Ações'
    ];

    this.fichas = this.fichaService.getAllFichas();
  }
}
