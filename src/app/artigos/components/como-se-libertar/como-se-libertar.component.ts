import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-como-se-libertar',
  templateUrl: './como-se-libertar.component.html',
  styleUrl: './como-se-libertar.component.scss'
})
export class ComoSeLibertarComponent {

  constructor(
    private router: Router,
  ) { }

  voltar():void {
    this.router.navigate(['/artigos'])
  }

}
