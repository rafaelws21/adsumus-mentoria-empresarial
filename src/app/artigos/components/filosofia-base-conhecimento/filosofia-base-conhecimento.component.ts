import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filosofia-base-conhecimento',
  templateUrl: './filosofia-base-conhecimento.component.html',
  styleUrl: './filosofia-base-conhecimento.component.scss'
})
export class FilosofiaBaseConhecimentoComponent {

  constructor(
    private router: Router,
  ) { }

  voltar():void {
    this.router.navigate(['/artigos'])
  }

}
