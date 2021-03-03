import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomePage } from './pages/home/home.page';
import { PreparingPage } from './pages/preparing/preparing.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'home', component: HomePage, canActivate: [AuthGuard] },
      { path: 'preparing', component: PreparingPage, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'preparing', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
