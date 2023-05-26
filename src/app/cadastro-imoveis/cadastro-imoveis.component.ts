import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';
import { CurrencyPipe } from '@angular/common';
import { CadastroImoveisHttpService } from './services/cadastro-imoveis-http.service';
import { CadastroImovelModel } from './model/cadastro-imovel.model';

@Component({
  selector: 'app-cadastro-imoveis',
  templateUrl: './view/cadastro-imoveis.component.html',
  styleUrls: ['./view/cadastro-imoveis.component.scss'],  
})
export class CadastroImoveisComponent implements OnInit {
  
  formulario: FormGroup;
  tipos: string[] = ['Apartamento', 'Casa'];

  constructor(private _formService: CadastroImoveisFormService, private _httpService: CadastroImoveisHttpService) {}

  ngOnInit(): void {
    this._formService.construirFormulario()
    this.formulario = this._formService.formulario
  }

  get cepValido(): boolean {
    return this.endereco.get('cep')?.value.length === 8
  }

  get entidade(): FormGroup {
    return this.formulario
  }

  get endereco(): FormGroup{
    return this.formulario.get('endereco') as FormGroup
  }

  receberEndereco(endereco: any) {
    this.formulario.get('endereco')?.setValue(endereco)
  }

  listar(): void {
    const dados = +this.formulario.get('id')?.value;
  
    this._httpService.listarImovel(dados).subscribe((res) => {
      this.formulario.patchValue(res);

      console.log(res)
  
      const endereco = res.endereco[0];
      this.endereco.get('logradouro')?.setValue(endereco.rua);
      this.endereco.get('cep')?.setValue(endereco.cep);
      this.endereco.get('bairro')?.setValue(endereco.bairro);
      this.endereco.get('localidade')?.setValue(endereco.cidade);
      this.endereco.get('uf')?.setValue(endereco.uf);
      this.endereco.get('numero')?.setValue(endereco.numero);
    });
  }
  

  editar(){}

  excluir(){}

  salvar(): void {    
    const dados = this.formulario.getRawValue()      

    // this._httpService.salvarImovel(dados).subscribe((res) => console.log(res))
  }

  pesquisarCEP():void {
    if (!this.cepValido) return

    const dados = this.endereco.get('cep')?.value

    this._httpService.carregarEndereco(dados)
    
    .subscribe((res) => {
      this.endereco.get('logradouro')?.setValue(res.logradouro);      
      this.endereco.get('bairro')?.setValue(res.bairro);
      this.endereco.get('localidade')?.setValue(res.localidade);
      this.endereco.get('uf')?.setValue(res.uf);    
    },
    () => {alert('CEP não encontrado!')})
  }
}
