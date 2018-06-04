import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ModalDirective } from '../directives/modal-host';
import { AppModal } from "../modules/modal/modal/modal.component";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent  {

  @ViewChild(ModalDirective) modal: ModalDirective

  constructor() {}

  ngAfterViewInit(){
    console.log(this.modal)
  }


}
