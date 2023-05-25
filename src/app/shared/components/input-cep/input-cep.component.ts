import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-cep',
  templateUrl: './view/input-cep.component.html',
  styleUrls: ['./view/input-cep.component.scss']
})
export class InputCepComponent implements OnInit {

  cepForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.cepForm = this.formBuilder.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      cep: ['', Validators.required]
    });

    // Preencha os campos com os valores fornecidos
    this.cepForm.patchValue({
      rua: 'Rua exemplo imóvel 1',
      numero: 100,
      bairro: 'Exemplo de bairro',
      cidade: 'Belo Horizonte',
      uf: 'MG',
      cep: '3333-333'
    });
  }


}
