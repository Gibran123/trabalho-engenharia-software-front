export class Endereco {
  public street: string;
  public district: string;
  public number: string;

  constructor(street = '', district = '', number = '') {
    this.street = street;
    this.district = district;
    this.number = number;
  }
}