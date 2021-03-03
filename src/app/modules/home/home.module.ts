import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './pages/home/home.page';
import { PreparingPage } from './pages/preparing/preparing.page';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { PartsModule } from '../parts/parts.module';
import { ReadyModalComponent } from './components/home/ready-modal/ready-modal.component';
import { FinishModalComponent } from './components/home/finish-modal/finish-modal.component';

@NgModule({
  declarations: [HomePage, PreparingPage, HomeLayoutComponent, ReadyModalComponent, FinishModalComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, PartsModule]
})
export class HomeModule {}
