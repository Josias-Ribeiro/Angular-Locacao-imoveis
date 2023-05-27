import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class CadastroPessoaHttpService { 

  constructor(private _http: HttpClient) {}

  carregarPessoas(): Observable<any>{
    return this._http.get('http://localhost:5875/proprietario')
  }

  salvarPessoa(pessoa: Pessoa): Observable<any> {
    return this._http.post('http://localhost:5875/proprietario', pessoa);
  }
}
