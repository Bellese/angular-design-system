import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-descr',
  templateUrl: './table-description.component.html',
  styleUrls: ['./table-description.component.css']
})

export class AppTableDescr {
    @Input () title;
    @Input () subTitle;
    @Input () description; 
}