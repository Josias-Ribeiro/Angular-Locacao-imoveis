import { Component, OnInit } from '@angular/core';
import { CadastroPessoaFormService } from './services/cadastro-pessoa-form.service';
import { FormGroup } from '@angular/forms';
import { CadastroPessoaHttpService } from './services/cadastro-pessoa-http.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './view/cadastro-pessoa.component.html',
  styleUrls: ['./view/cadastro-pessoa.component.scss'],
})
export class CadastroPessoaComponent implements OnInit {
  formulario: FormGroup;

  constructor(public formService: CadastroPessoaFormService, private _httpService: CadastroPessoaHttpService) {}

  ngOnInit(): void {
    this.formService.construirFormulario();
    this.formulario = this.formService.form;
  }

  salvar(): void {  
    this._httpService.salvarPessoa(this.formulario.getRawValue())
    
  }
}
