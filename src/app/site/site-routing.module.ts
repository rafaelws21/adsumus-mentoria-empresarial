import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';
import { LivrosComponent } from './components/livros/livros.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';

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
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
  {
    path: 'livros',
    component: LivrosComponent,
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
