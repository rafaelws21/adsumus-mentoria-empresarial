import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LiderancaSobrePrismaComponent } from '../../components/lideranca-sobre-prisma/lideranca-sobre-prisma.component';
import { GratidaoComponent } from '../../components/gratidao/gratidao.component';
import { MotivacaoHunterFilosofiaComponent } from '../../components/motivacao-hunter-filosofia/motivacao-hunter-filosofia.component';
import { ComoSeLibertarComponent } from '../../components/como-se-libertar/como-se-libertar.component';
import { FilosofiaBaseConhecimentoComponent } from '../../components/filosofia-base-conhecimento/filosofia-base-conhecimento.component';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss',
})
export class ArtigosComponent {
  listaSubMenu = [
    {
      label: 'A Filosofia como Base do Conhecimento e Ordenadora do Pensamento',
      descricao:
        'A Filosofia, muitas vezes considerada a mãe de todas as disciplinas, desempenha um papel crucial na construção do conhecimento...',
      imgPath: './assets/img/artigos/filosofia-base/image2.png',
      path: () => this.goTo('filosofia'),
    },
    {
      label: 'A Liderança sobre o Prisma da Comunicação Eficaz',
      descricao:
        'A liderança é um tema importante em qualquer cenário, seja ele profissional ou pessoal, sendo que a liderança eficaz pode ajudar a melhorar a comunicação...',
      imgPath: './assets/img/artigos/menu/liderança_eficaz.jpg',
      path: () => this.goTo('lideranca'),
    },
    {
      label: 'Como Se libertar de Forma Prática dos Pré-conceitos',
      descricao:
        'Você já se pegou pensando ou agindo de forma preconceituosa, limitante ou negativa em relação a si mesmo, aos outros ou ao mundo? Se a resposta for sim, saiba que você...',
      imgPath: './assets/img/artigos/menu/menina_horizonte.jpg',
      path: () => this.goTo('como-se-libertar'),
    },
    {
      label: 'Gratidão, CHA e Plenitude: Tríade do Sucesso Existencialtidão',
      descricao:
        'No caminho para o sucesso existencial, a tríade gratidão, (Competência, Habilidades e Atitudes) e plenitude se destacam basilares diante dos elementos a serem conquistados...',
      imgPath: './assets/img/artigos/gratidao/image1.png',
      path: () => this.goTo('gratidao'),
    },
    {
      label: 'Motivação e Sucesso Profissional: Uma Trajetória Inspiradora',
      descricao:
        'A busca pelo sucesso profissional é uma caminhada desafiadora, repleta de obstáculos que demandam não apenas habilidades técnicas, mas também uma forte motivação...',
      imgPath: './assets/img/artigos/menu/motivacao.jpg',
      path: () => this.goTo('motivacao'),
    },
  ];

  constructor(private router: Router, private dialog: MatDialog) {}

  goTo(path: string): void {
    switch (path) {
      case 'filosofia':
        this.dialog.open(FilosofiaBaseConhecimentoComponent);
        break;
      case 'lideranca':
        this.dialog.open(LiderancaSobrePrismaComponent);
        break;
      case 'como-se-libertar':
        this.dialog.open(ComoSeLibertarComponent);
        break;
      case 'gratidao':
        this.dialog.open(GratidaoComponent);
        break;
      case 'motivacao':
        this.dialog.open(MotivacaoHunterFilosofiaComponent);
        break;
    }
  }
}
