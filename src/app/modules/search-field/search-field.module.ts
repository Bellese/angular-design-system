import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './search-field.component';

@NgModule({
  declarations: [SearchFieldComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchFieldComponent]
})
export class SearchFieldModule { }
