import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lideranca-sobre-prisma',
  templateUrl: './lideranca-sobre-prisma.component.html',
  styleUrl: './lideranca-sobre-prisma.component.scss'
})
export class LiderancaSobrePrismaComponent {

  constructor(
    private router: Router,
  ) { }

  voltar():void {
    this.router.navigate(['/artigos'])
  }

}
