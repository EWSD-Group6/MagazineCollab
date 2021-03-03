import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginPage } from './pages/login/login.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AuthLayoutComponent, LoginPage],
  imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
