import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import ComponentIntroComponent from './component-intro.component';
import ImportsComponent from './imports.component';
import InstallationComponent from './installation.component';
import NgModuleComponent from './ngmodule.component';
import ParameterListComponent from './parameter-list.component';
import ParameterComponent from './parameter.component';
import WelcomeComponent from './welcome.component';

@NgModule({
  declarations: [
    // Storybook introduction components
    WelcomeComponent,
    InstallationComponent,

    // Storybook Documentation Components
    ImportsComponent,
    NgModuleComponent,
    ParameterListComponent,
    ParameterComponent,
    ComponentIntroComponent,
  ],
  imports: [CommonModule],
  exports: [
    // Storybook introduction components
    WelcomeComponent,
    InstallationComponent,

    // Storybook Documentation Components
    ComponentIntroComponent,
  ],
})
export class StoriesModule {}
