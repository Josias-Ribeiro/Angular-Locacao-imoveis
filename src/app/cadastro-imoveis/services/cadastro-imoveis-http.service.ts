import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroImovelModel } from '../model/cadastro-imovel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroImoveisHttpService {
  constructor(private _http: HttpClient) {}

  salvarImovel(imovel: CadastroImovelModel): Observable<any> {
    return this._http.post('http://localhost:5875/imovel', imovel);
  }
}
