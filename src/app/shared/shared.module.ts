import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MobxAngularModule, MaterialModule, FlexLayoutModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MobxAngularModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule {}
