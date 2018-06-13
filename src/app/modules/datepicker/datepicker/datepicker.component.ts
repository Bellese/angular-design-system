import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  myform: FormGroup

  ngOnInit(){
    this.myform = new FormGroup({
      month: new FormControl(null, [
        Validators.required,
        Validators.maxLength(2)
      ]),
      day: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required)
    })
  }
}
