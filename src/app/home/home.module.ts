import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialCoreModule } from '../shared/modulos/material-core.module';
import { CadastroImoveisHttpService } from '../cadastro-imoveis/services/cadastro-imoveis-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialCoreModule,
    HttpClientModule
  ],
  providers: [CadastroImoveisHttpService]
})
export class HomeModule { }
