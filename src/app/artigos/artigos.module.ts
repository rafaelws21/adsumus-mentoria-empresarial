import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { ArtigosRoutingModule } from './artigos-routing.module';
import { ComoSeLibertarComponent } from './components/como-se-libertar/como-se-libertar.component';
import { FilosofiaBaseConhecimentoComponent } from './components/filosofia-base-conhecimento/filosofia-base-conhecimento.component';
import { GratidaoComponent } from './components/gratidao/gratidao.component';
import { LiderancaSobrePrismaComponent } from './components/lideranca-sobre-prisma/lideranca-sobre-prisma.component';
import { MotivacaoHunterFilosofiaComponent } from './components/motivacao-hunter-filosofia/motivacao-hunter-filosofia.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';


@NgModule({
  declarations: [
    ArtigosComponent,
    GratidaoComponent,
    FilosofiaBaseConhecimentoComponent,
    MotivacaoHunterFilosofiaComponent,
    LiderancaSobrePrismaComponent,
    ComoSeLibertarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArtigosRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatRippleModule,
    MatDividerModule,
  ]
})
export class ArtigosModule { }
