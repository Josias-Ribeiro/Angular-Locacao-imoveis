import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCepComponent } from './input-cep.component';
import { MaterialCoreModule } from '../../modulos/material-core.module';

import { HttpClientModule } from '@angular/common/http';
import { InputCepServiceHttpService } from './services/input-cep-service-http.service';
import { InputCepFormService } from './services/input-cep-service-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputCepComponent
  ],
  imports: [
    CommonModule,
    MaterialCoreModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InputCepComponent],
  providers: [InputCepServiceHttpService, InputCepFormService]
})
export class InputCepModule { }
