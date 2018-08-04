import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class RapidaoService {

  constructor(private httpCliente: HttpClient) { }

  public getList() {
    const url = `${environment.api_place}/posts`;
    return this.httpCliente.get<Post[]>(url).toPromise();
  }
}
