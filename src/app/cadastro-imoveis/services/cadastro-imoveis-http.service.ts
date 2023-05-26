import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroImovelModel } from '../model/cadastro-imovel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroImoveisHttpService {
  private _rota = `http://localhost:5875/imovel`
  private _rotaCEP = `http://viacep.com.br/ws`

  constructor(private _http: HttpClient) {}

  carregarEndereco(cep: number): Observable<any>{
    return this._http.get(`${this._rotaCEP}/${cep}/json`)
  }

  listarImovel(id: number): Observable<any> {
    return this._http.get(`${this._rota}/${id}`);
  }

  deletarImovel(id: number): Observable<any> {
    return this._http.delete(`${this._rota}/${id}`);
  }

  editarImovel(imovel: CadastroImovelModel): Observable<any> {
    return this._http.put('http://localhost:5875/imovel', imovel);
  }

  salvarImovel(imovel: CadastroImovelModel): Observable<any> {
    return this._http.post('http://localhost:5875/imovel', imovel);
  }
}





