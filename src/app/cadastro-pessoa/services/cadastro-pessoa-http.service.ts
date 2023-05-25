import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Observable } from 'rxjs';

@Injectable()
export class CadastroPessoaHttpService {
    private _rota: 'http://localhost:5875/proprietario'

    constructor(private _http: HttpClient) { }

    salvarPessoa(pessoa: any): Observable<any>{
        return this._http.post(this._rota, pessoa)
    }
    
    
}