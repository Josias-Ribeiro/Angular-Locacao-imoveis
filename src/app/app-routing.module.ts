import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
path:'',
loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
  path: 'cadastro-pessoa',
  loadChildren: () => import('./cadastro-pessoa/cadastro-pessoa.module').then(m => m.CadastroPessoaModule)
},
{
  path: 'cadastro-imoveis',
  loadChildren: () => import('./cadastro-imoveis/cadastro-imoveis.module').then(m => m.CadastroImoveisModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
