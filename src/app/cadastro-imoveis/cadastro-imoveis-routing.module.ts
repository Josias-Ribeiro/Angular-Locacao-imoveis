import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroImoveisComponent } from './cadastro-imoveis.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroImoveisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroImoveisRoutingModule { }
