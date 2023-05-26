import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';
import { CurrencyPipe } from '@angular/common';
import { CadastroImoveisHttpService } from './services/cadastro-imoveis-http.service';

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

  receberEndereco(endereco: any) {
    this.formulario.get('endereco')?.setValue(endereco)
  }

  salvar(): void {    
    const dados = this.formulario.getRawValue()   

    console.log(dados)

    // this._httpService.salvarImovel(dados).subscribe((res) => console.log(res))
  }
}
