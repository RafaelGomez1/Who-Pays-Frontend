import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderPageModule} from './header/header.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderPageModule
  ],
  exports: [HeaderPageModule]
})
export class ComponentsModule { }
