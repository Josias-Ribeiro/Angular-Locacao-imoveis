import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CadastroImoveisFormService {
    formulario: FormGroup

    constructor(private _formBuilder: FormBuilder) { }

    construirFormulario(): void {
        this.formulario = this._formBuilder.group({
            nome: [null, Validators.required],
            tipo: [null, Validators.required],
            valor: [null, Validators.required],
            condominio: [null],
            quartos: [null],
            banheiros: [null],
            mobiliado: [false],
            area: [null],
            venda: [false],
            aluguel: [false],
            dataAnuncio: [null],
            proprietarioId: [null]
          });

          this.formulario.markAllAsTouched()
    }
    
}