import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { Error404Page } from './core/pages/error404/error404.page';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard]
  },
  { path: '404', component: Error404Page },
  { path: '**', redirectTo: '/' + '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
