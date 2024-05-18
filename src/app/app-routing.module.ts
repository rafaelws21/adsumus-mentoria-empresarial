import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule),
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  providers: [
    provideRouter(routes),
    RouterOutlet,
  ],
})
export class AppRoutingModule { }
