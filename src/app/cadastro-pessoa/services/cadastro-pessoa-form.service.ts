import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CadastroPessoaFormService {
    form: FormGroup

    constructor(private _fb: FormBuilder) { }

    get entidade(): FormGroup{
        return this.form.getRawValue()
    }

    construirFormulario(): void{
        this.form = this._fb.group({
            id: [null ],
            nome: [null, [Validators.required]],
            imovelId: [null, [Validators.required]]
        })

        this.form.markAllAsTouched()
    }
    
}