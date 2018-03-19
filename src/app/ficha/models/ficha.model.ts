import { Usuario } from "../../usuario/models/usuario.model";

export class Ficha {
  id: number;
  user: Usuario;
  description: string;
}