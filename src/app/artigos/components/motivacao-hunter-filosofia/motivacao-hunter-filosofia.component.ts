import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivacao-hunter-filosofia',
  templateUrl: './motivacao-hunter-filosofia.component.html',
  styleUrl: './motivacao-hunter-filosofia.component.scss'
})
export class MotivacaoHunterFilosofiaComponent {

  constructor(
    private router: Router,
  ) { }

  voltar():void {
    this.router.navigate(['/artigos'])
  }

}
