import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

const routes: Routes = [
  { path : 'produtos-form' , component : ProdutosFormComponent },
  { path : 'produtos-form/:id' , component : ProdutosFormComponent },
  { path : 'produtos-lista', component : ProdutosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
