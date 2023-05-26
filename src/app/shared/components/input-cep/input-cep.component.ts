import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputCepServiceHttpService } from './services/input-cep-service-http.service';
import { InputCepFormService } from './services/input-cep-service-form.service';

@Component({
  selector: 'app-input-cep',
  templateUrl: './view/input-cep.component.html',
  styleUrls: ['./view/input-cep.component.scss'],
})
export class InputCepComponent implements OnInit {
  cepForm: FormGroup;

  constructor(
    private _formService: InputCepFormService,
    private _httpService: InputCepServiceHttpService
  ) {}

  // GETTERS E SETTERS
  get cepValido(): boolean {
    return this._formService.form.get('cep')?.value.length === 8
  }

  // FIM GETTERS E SETTERS

  ngOnInit() {
    this._formService.construirFormulario();
    this.cepForm = this._formService.form;
  }

  pesquisarCEP():void {
    if (!this.cepValido) return

    const dados = this._formService.form.get('cep')?.value

    this._httpService.carregarEndereco(dados)
    
    .subscribe((res) => {
      this.cepForm.patchValue(res)
    },
    () => {alert('CEP não encontrado!')})
  }
}
