import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss'
})
export class ArtigosComponent {

  listaSubMenu = [
    {label:'A Filosofia como Base do Conhecimento e Ordenadora do Pensamento', path:() => (this.goTo('/artigos/filosofia-base-conhecimento'))},
    {label:'A Liderança sobre o Prisma da Comunicação Eficaz', path:() => (this.goTo('/artigos/lideranca-sobre-prisma'))},
    {label:'Como Se libertar de Forma Prática dos Pré-conceitos', path: () => (this.goTo('/artigos/como-se-libertar'))},
    {label:'Gratidão, CHA e Plenitude: Tríade do Sucesso Existencialtidão', path: () => (this.goTo('/artigos/gratidao'))},
    {label:'Motivação e Sucesso Profissional: Uma Trajetória Inspiradora', path: () => (this.goTo('/artigos/motivacao-sucesso-profissional'))},
  ]

  constructor(
    private router: Router,
  ) { }

  goTo(path: string): void {
    this.router.navigate([path])
  }

}
