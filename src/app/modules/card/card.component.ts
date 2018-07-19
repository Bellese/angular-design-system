import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  @Input() index;
  @Input() data;
  isExpanded: any = {};

  expand(index){
    this.isExpanded[index] = !this.isExpanded[index];
    (!this.isExpanded[index]) ? document.getElementById('topLevel_'+index).focus() : false;
  }
}
