import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';
import { LivrosComponent } from './components/livros/livros.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SiteRoutingModule } from './site-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionarioComponent } from './components/questionario/questionario.component';


@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContatosComponent,
    LivrosComponent,
    ProjetosComponent,
    QuestionarioComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class SiteModule { }
