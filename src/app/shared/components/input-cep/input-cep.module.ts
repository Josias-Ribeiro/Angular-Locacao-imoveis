import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCepComponent } from './input-cep.component';
import { MaterialCoreModule } from '../../modulos/material-core.module';
import { InputServiceHttpService } from './services/input-service-http.service';



@NgModule({
  declarations: [
    InputCepComponent
  ],
  imports: [
    CommonModule,
    MaterialCoreModule
  ],
  exports: [InputCepComponent],
  providers: [InputServiceHttpService]
})
export class InputCepModule { }
