import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';
import { CurrencyPipe } from '@angular/common';
import { CadastroImoveisHttpService } from './services/cadastro-imoveis-http.service';
import { CadastroImovelModel } from './model/cadastro-imovel.model';
import { CadastroPessoaHttpService } from '../cadastro-pessoa/services/cadastro-pessoa-http.service';
import { Pessoa } from '../cadastro-pessoa/model/pessoa.model';
import { Status } from '../shared/constants/status';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-cadastro-imoveis',
  templateUrl: './view/cadastro-imoveis.component.html',
  styleUrls: ['./view/cadastro-imoveis.component.scss'],
})
export class CadastroImoveisComponent implements OnInit {
  status: string;
  formulario: FormGroup;
  tipos: string[] = ['Apartamento', 'Casa'];
  arrayPessoas: Pessoa[];

  constructor(
    private _formService: CadastroImoveisFormService,
    private _httpService: CadastroImoveisHttpService,
    private _httpPessoaService: CadastroPessoaHttpService
  ) {}

  ngOnInit(): void {
    this._formService.construirFormulario();
    this.formulario = this._formService.formulario;
    this._carregarDadosPessoas();
    this.status = Status.NovaPesquisa;

    console.log(this.status)
  }

  private _carregarDadosPessoas() {
    this._httpPessoaService.carregarPessoas().subscribe((res) => {
      this.arrayPessoas = res;
    });
  }

  get cepValido(): boolean {
    return this.endereco.get('cep')?.value.length === 8;
  }

  get entidade(): FormGroup {
    return this.formulario;
  }

  get endereco(): FormGroup {
    return this.formulario.get('endereco') as FormGroup;
  }

  receberEndereco(endereco: any) {
    this.formulario.get('endereco')?.setValue(endereco);
  }

  cancelar() {
    this.status = Status.NovaPesquisa;
    this.formulario.enable();
    this.formulario.reset();
  }

  criar(): void {
    this.status = Status.Inserindo;
    this.formulario.enable();
    this.formulario.reset();
  }

  listar(): void {
    const dados = +this.formulario.get('id')?.value;

    if (!dados) {
      alert('Deve ser informado um ID');
      return;
    }

    this.status = Status.DadosCarregados;

    this.formulario.disable();

    this._httpService.listarImovel(dados).subscribe((res) => {
      this.formulario.patchValue(res);

      const endereco = res.endereco[0];
      this.endereco.get('logradouro')?.setValue(endereco.rua);
      this.endereco.get('cep')?.setValue(endereco.cep);
      this.endereco.get('bairro')?.setValue(endereco.bairro);
      this.endereco.get('localidade')?.setValue(endereco.cidade);
      this.endereco.get('uf')?.setValue(endereco.uf);
      this.endereco.get('numero')?.setValue(endereco.numero);

      this.endereco.disable();
    });
  }

  editar(): void {
    this.status = Status.Editando;
    this.formulario.enable();
  }

  excluir(): void {
    const dados = +this.formulario.get('id')?.value;
    this._httpService.deletarImovel(dados)
    .pipe(finalize(() => { 
      this.formulario.reset()
      this.status = Status.NovaPesquisa
      alert('Imóvel removido com sucesso!')
    }))
    .subscribe(() => {})
  }

  salvar(): void {
    const dados = this.formulario.getRawValue();

    this._httpService.salvarImovel(dados)
    .pipe(finalize(() => {
      alert('Imóvel salvo com sucesso!')
      this.formulario.disable()
    }))
    .subscribe(() => {})

  }

  pesquisarCEP(): void {
    if (!this.cepValido) return;

    const dados = this.endereco.get('cep')?.value;

    this._httpService
      .carregarEndereco(dados)

      .subscribe(
        (res) => {
          this.endereco.get('logradouro')?.setValue(res.logradouro);
          this.endereco.get('bairro')?.setValue(res.bairro);
          this.endereco.get('localidade')?.setValue(res.localidade);
          this.endereco.get('uf')?.setValue(res.uf);
        },
        () => {
          alert('CEP não encontrado!');
        }
      );
  }
}
