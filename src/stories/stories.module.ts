import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ImportsComponent from './imports.component';
import NgModuleComponent from './ngmodule.component';
import ParameterListComponent from './parameter-list.component';
import ParameterComponent from './parameter.component';
import ComponentIntroComponent from './component-intro.component';

@NgModule({
  declarations: [
    ComponentIntroComponent,
    ImportsComponent,
    NgModuleComponent,
    ParameterListComponent,
    ParameterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ComponentIntroComponent,
    ImportsComponent,
    NgModuleComponent,
    ParameterListComponent,
    ParameterComponent,
  ]
})
export class StoriesModule { }
