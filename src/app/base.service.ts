import { HttpClient } from '@angular/common/http';

import { ConstantsService } from './constants.service';

export abstract class BaseService<T> {

  private path: string;
  http: HttpClient;

  constructor(path: string, http: HttpClient) {
    this.path = path;
    this.http = http;
  }

  create(model: T) {
    this.http.post(`${ConstantsService.BASE_URL}/${this.path}`, model);
  }

  update(model: T, id: number) {
    this.http.put(`${ConstantsService.BASE_URL}/${this.path}/${id}`, model);
  }

  delete(id: number) {
    this.http.delete(`${ConstantsService.BASE_URL}/${this.path}/${id}`);
  }

  getAll() {
    this.http.get(`${ConstantsService.BASE_URL}/${this.path}`);
  }

  getById(id: number) {
    this.http.get(`${ConstantsService.BASE_URL}/${this.path}/${id}`);
  }
}