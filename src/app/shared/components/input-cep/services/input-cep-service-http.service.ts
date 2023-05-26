import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputCepServiceHttpService {  
  private _rota = `http://viacep.com.br/ws`

  constructor(private _http: HttpClient) { }

  carregarEndereco(cep: number): Observable<any>{
    return this._http.get(`${this._rota}/${cep}/json`)
  }
}
