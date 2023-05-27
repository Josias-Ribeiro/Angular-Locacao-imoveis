import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { MaterialCoreModule } from '../shared/modulos/material-core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroPessoaFormService } from './services/cadastro-pessoa-form.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { CadastroPessoaHttpService } from './services/cadastro-pessoa-http.service';
import { CadastroImoveisHttpService } from '../cadastro-imoveis/services/cadastro-imoveis-http.service';

@NgModule({
  declarations: [CadastroPessoaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialCoreModule,
    CadastroPessoaRoutingModule,
  ],

  providers: [CadastroPessoaFormService, CadastroPessoaHttpService, CadastroImoveisHttpService],
})
export class CadastroPessoaModule {}
