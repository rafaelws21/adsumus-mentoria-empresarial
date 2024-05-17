import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ArtigosComponent } from './components/artigos/artigos.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { LivrosComponent } from './components/livros/livros.component';
import { ProjetosComponent } from './components/projetos/projetos.component';


@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ArtigosComponent,
    ContatosComponent,
    LivrosComponent,
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
