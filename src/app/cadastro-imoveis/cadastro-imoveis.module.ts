import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroImoveisRoutingModule } from './cadastro-imoveis-routing.module';
import { CadastroImoveisComponent } from './cadastro-imoveis.component';


@NgModule({
  declarations: [
    CadastroImoveisComponent
  ],
  imports: [
    CommonModule,
    CadastroImoveisRoutingModule
  ]
})
export class CadastroImoveisModule { }
