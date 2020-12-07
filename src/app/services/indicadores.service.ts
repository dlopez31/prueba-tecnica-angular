import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IndicadoresService {

  public urlBase = `${environment.urlBase}/last`;

  constructor(private http: HttpClient) { }

  getIndicadores(): Observable<Object> {
    return this.http.get<Object>(`${this.urlBase}`);
  }
}
