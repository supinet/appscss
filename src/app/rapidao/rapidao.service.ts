import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapidaoService {

  constructor(private httpCliente: HttpClient) { }

  public getList() {
    const url = `${environment.api_place}/posts`;
    return this.httpCliente.get(url).toPromise();
  }
}
