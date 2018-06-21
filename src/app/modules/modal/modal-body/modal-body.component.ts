import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-body",
  templateUrl: "./modal-body.component.html",
  styleUrls: ["./modal-body.component.css"]
})
export class AppModalBody {
  @Input() modalData;

  ngOnInit() {}
}
