import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratidao',
  templateUrl: './gratidao.component.html',
  styleUrl: './gratidao.component.scss'
})
export class GratidaoComponent {

  constructor(
    private router: Router,
  ) { }

  voltar():void {
    this.router.navigate(['/artigos'])
  }

}
