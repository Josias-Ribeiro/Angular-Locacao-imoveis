import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';

@Component({
  selector: 'app-cadastro-imoveis',
  templateUrl: './view/cadastro-imoveis.component.html',
  styleUrls: ['./view/cadastro-imoveis.component.scss'],
})
export class CadastroImoveisComponent implements OnInit {
  formulario: FormGroup;
  tipos: string[] = ['Apartamento', 'Casa'];

  constructor(private _formService: CadastroImoveisFormService) {}

  ngOnInit(): void {
    this._formService.construirFormulario()
    this.formulario = this._formService.formulario
  }

  salvar(): void {
    if (this.formulario.valid) {
      // Lógica para salvar o formulário
    } else {
      // Tratar erros de validação do formulário
    }
  }
}
