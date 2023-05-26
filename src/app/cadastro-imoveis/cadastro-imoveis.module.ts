import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroImoveisRoutingModule } from './cadastro-imoveis-routing.module';
import { CadastroImoveisComponent } from './cadastro-imoveis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCoreModule } from '../shared/modulos/material-core.module';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';
import { InputCepModule } from '../shared/components/input-cep/input-cep.module';
import { CadastroImoveisHttpService } from './services/cadastro-imoveis-http.service';



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
    InputCepModule,
    CadastroImoveisRoutingModule,
    
  ],providers: [CadastroImoveisFormService, CadastroImoveisHttpService]
})
export class CadastroImoveisModule { }
