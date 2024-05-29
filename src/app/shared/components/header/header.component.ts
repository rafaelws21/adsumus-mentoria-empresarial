import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  onMobile$!: Observable<boolean>;

  listaMenu = [
    {label: 'Home', path: '/'},
    {label: 'Sobre Nós', path: '/sobre'},
    {label: 'Projetos', path: '/projetos'},
    {label: 'Livros Autorais', path: '/livros'},
    {label: 'Artigos', path: '/artigos'},
    {label: 'Contatos', path: '/contatos'},
  ];

  constructor(
    private layoutService: LayoutService,
  ) { }


  ngOnInit(): void {
    this.onMobile$ = this.layoutService.onMobile();

  }


}
