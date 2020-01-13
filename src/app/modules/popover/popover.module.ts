// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { ButtonModule } from '../button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdePopoverModule } from '@material-extended/mde';

// Components
import { PopoverComponent } from './popover.component';

@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FontAwesomeModule,
    MdePopoverModule
  ],
  exports: [
    PopoverComponent,
  ]
})
export class PopoverModule { }
