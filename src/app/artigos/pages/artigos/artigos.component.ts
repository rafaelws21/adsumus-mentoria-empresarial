import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss'
})
export class ArtigosComponent {

  listaSubMenu = [
    {
      label:'A Filosofia como Base do Conhecimento e Ordenadora do Pensamento',
      descricao: 'A Filosofia, muitas vezes considerada a mãe de todas as disciplinas, desempenha um papel crucial na construção do conhecimento...',
      imgPath: './assets/img/artigos/filosofia-base/image2.png',
      path:() => (this.goTo('/artigos/filosofia-base-conhecimento'))
    },
    {
      label:'A Liderança sobre o Prisma da Comunicação Eficaz',
      descricao: 'A liderança é um tema importante em qualquer cenário, seja ele profissional ou pessoal, sendo que a liderança eficaz pode ajudar a melhorar a comunicação...',
      imgPath: './assets/img/artigos/menu/liderança_eficaz.jpg',
      path:() => (this.goTo('/artigos/lideranca-sobre-prisma'))
    },
    {
      label:'Como Se libertar de Forma Prática dos Pré-conceitos',
      descricao: 'Você já se pegou pensando ou agindo de forma preconceituosa, limitante ou negativa em relação a si mesmo, aos outros ou ao mundo? Se a resposta for sim, saiba que você...',
      imgPath: './assets/img/artigos/menu/menina_horizonte.jpg',
      path: () => (this.goTo('/artigos/como-se-libertar'))
    },
    {
      label:'Gratidão, CHA e Plenitude: Tríade do Sucesso Existencialtidão',
      descricao: 'No caminho para o sucesso existencial, a tríade gratidão, (Competência, Habilidades e Atitudes) e plenitude se destacam basilares diante dos elementos a serem conquistados...',
      imgPath: './assets/img/artigos/gratidao/image1.png',
      path: () => (this.goTo('/artigos/gratidao'))
    },
    {
      label:'Motivação e Sucesso Profissional: Uma Trajetória Inspiradora',
      descricao: 'A busca pelo sucesso profissional é uma caminhada desafiadora, repleta de obstáculos que demandam não apenas habilidades técnicas, mas também uma forte motivação...',
      imgPath: './assets/img/artigos/menu/motivacao.jpg',
      path: () => (this.goTo('/artigos/motivacao-sucesso-profissional'))
    },
  ]

  constructor(
    private router: Router,
  ) { }

  goTo(path: string): void {
    this.router.navigate([path])
  }

}
