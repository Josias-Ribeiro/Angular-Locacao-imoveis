import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroImoveisRoutingModule } from './cadastro-imoveis-routing.module';
import { CadastroImoveisComponent } from './cadastro-imoveis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCoreModule } from '../shared/modulos/material-core.module';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';


@NgModule({
  declarations: [
    CadastroImoveisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialCoreModule,
    CadastroImoveisRoutingModule
  ],providers: [CadastroImoveisFormService]
})
export class CadastroImoveisModule { }
