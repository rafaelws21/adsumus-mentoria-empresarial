import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  listaMenu = [
    {label: 'Home', path: '/'},
    {label: 'Sobre Nós', path: '/sobre'},
    {label: 'Projetos', path: '/projetos'},
    {label: 'Livros Autorais', path: '/livros'},
    {label: 'Artigos', path: '/artigos'},
    {label: 'Contatos', path: '/contatos'},
  ];


}
