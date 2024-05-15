import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ContatosComponent } from './components/contatos/contatos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'artigos',
    component: ArtigosComponent,
  }, {
    path: 'contatos',
    component: ContatosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
