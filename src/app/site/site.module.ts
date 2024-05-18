import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ArtigosComponent } from './components/artigos/artigos.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';
import { LivrosComponent } from './components/livros/livros.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SiteRoutingModule } from './site-routing.module';


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
    SiteRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ]
})
export class SiteModule { }
