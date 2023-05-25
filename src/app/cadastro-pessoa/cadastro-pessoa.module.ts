import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';

@NgModule({
  declarations: [CadastroPessoaComponent],
  imports: [CommonModule, CadastroPessoaRoutingModule],
})
export class CadastroPessoaModule {}
