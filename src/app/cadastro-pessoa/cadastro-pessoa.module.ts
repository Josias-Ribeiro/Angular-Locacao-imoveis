import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { MaterialCoreModule } from '../shared/modulos/material-core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroPessoaFormService } from './services/cadastro-pessoa-form.service';

@NgModule({
  declarations: [CadastroPessoaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialCoreModule, CadastroPessoaRoutingModule],
  providers: [CadastroPessoaFormService]
})
export class CadastroPessoaModule {}
