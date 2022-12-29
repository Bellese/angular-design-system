import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AlertModule } from '../alert/alert.module';
import { AppTwentyFourHourTimeComponent } from './twenty-four-hour-time';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormlyModule, AlertModule, FontAwesomeModule],
  declarations: [AppTwentyFourHourTimeComponent],
  exports: [AppTwentyFourHourTimeComponent],
})
export class TwentyFourHourTimeModule {}
