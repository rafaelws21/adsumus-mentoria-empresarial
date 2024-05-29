import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ArtigosComponent } from './artigos/pages/artigos/artigos.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule),
  },
  {
    path: 'artigos',
    component: LayoutComponent,
    loadChildren: () => import('./artigos/artigos.module').then(m => m.ArtigosModule),
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
