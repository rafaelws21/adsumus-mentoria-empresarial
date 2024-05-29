import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilosofiaBaseConhecimentoComponent } from './components/filosofia-base-conhecimento/filosofia-base-conhecimento.component';
import { GratidaoComponent } from './components/gratidao/gratidao.component';
import { LiderancaSobrePrismaComponent } from './components/lideranca-sobre-prisma/lideranca-sobre-prisma.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { MotivacaoHunterFilosofiaComponent } from './components/motivacao-hunter-filosofia/motivacao-hunter-filosofia.component';
import { ComoSeLibertarComponent } from './components/como-se-libertar/como-se-libertar.component';

const routes: Routes = [
  {
    path: '',
    component: ArtigosComponent,
    children: [
      {
        path:'lideranca-sobre-prisma',
        component: LiderancaSobrePrismaComponent,
      },
      {
        path:'gratidao',
        component: GratidaoComponent,
      },
      {
        path:'filosofia-base-conhecimento',
        component: FilosofiaBaseConhecimentoComponent,
      },
      {
        path:'motivacao-sucesso-profissional',
        component: MotivacaoHunterFilosofiaComponent,
      },
      {
        path:'como-se-libertar',
        component: ComoSeLibertarComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigosRoutingModule { }
