import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class InputCepFormService {
    form: FormGroup

    constructor(private _formBuilder: FormBuilder ) { }

    construirFormulario(): void {
        this.form = this._formBuilder.group({
          id: null,
          logradouro: {value: '', disabled: true },
          numero: ['', Validators.required],
          bairro: {value: '', disabled: true },
          localidade: {value: '', disabled: true },
          uf: {value: '', disabled: true },
          cep: ['', Validators.required]
        });

        this.form.markAllAsTouched()
    }
    
}