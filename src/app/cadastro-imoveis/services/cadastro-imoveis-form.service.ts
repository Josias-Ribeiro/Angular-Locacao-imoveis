import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CadastroImoveisFormService {
  formulario: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  construirFormulario(): void {
    this.formulario = this._formBuilder.group({
      id: null,
      nome: [null, Validators.required],
      tipo: [null, Validators.required],
      valor: [null, Validators.required],
      endereco: this._formBuilder.group({
        id: null,
        logradouro: { value: '', disabled: true },
        numero: ['', Validators.required],
        bairro: { value: '', disabled: true },
        localidade: { value: '', disabled: true },
        uf: { value: '', disabled: true },
        cep: ['', Validators.required],
      }),
      condominio: [null],
      quartos: [null],
      banheiros: [null],
      mobiliado: [false],
      area: [null],
      venda: [false],
      aluguel: [false],
      dataAnuncio: [null],
      proprietarioId: [null],
    });

    this.formulario.markAllAsTouched();
  }
}
