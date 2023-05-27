import { Component, OnInit } from '@angular/core';
import { CadastroPessoaFormService } from './services/cadastro-pessoa-form.service';
import { FormGroup } from '@angular/forms';
import { CadastroPessoaHttpService } from './services/cadastro-pessoa-http.service';
import { CadastroImoveisHttpService } from '../cadastro-imoveis/services/cadastro-imoveis-http.service';
import { CadastroImovelModel } from '../cadastro-imoveis/model/cadastro-imovel.model';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './view/cadastro-pessoa.component.html',
  styleUrls: ['./view/cadastro-pessoa.component.scss'],
})
export class CadastroPessoaComponent implements OnInit {
  formulario: FormGroup;
  arrayImoveis: CadastroImovelModel[];

  constructor(
    public formService: CadastroPessoaFormService,
    private _httpService: CadastroPessoaHttpService,
    private _httpImovelService: CadastroImoveisHttpService
  ) {}

  ngOnInit(): void {
    this.formService.construirFormulario();
    this.formulario = this.formService.form;
    this._carregarImoveis()
  }

  private _carregarImoveis() {
  this._httpImovelService.carregarImoveis().subscribe(res => {
    this.arrayImoveis = res
  })
  }

  salvar(): void {
    this._httpService
      .salvarPessoa(this.formService.entidade)
      .subscribe((res) => console.log(res));
  }
}
