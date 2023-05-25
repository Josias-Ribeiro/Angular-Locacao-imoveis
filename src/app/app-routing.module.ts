import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'cadastro-pessoa',
  loadChildren: () => import('./cadastro-pessoa/cadastro-pessoa.module').then(m => m.CadastroPessoaModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
