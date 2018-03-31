import { Maquina } from "../../maquina/models/maquina.model";
import { Musculo } from "../../musculo/models/musculo.model";

export class Exercicio {
  public id: number;
  public machine: Maquina;
  public muscle: Musculo;
  public description: string;
}