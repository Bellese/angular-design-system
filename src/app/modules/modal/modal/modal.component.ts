import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class AppModal {
  @Input() modalTitle;
  @Input() modalClass;
  @Input() modalData;
  @Input() actionButtonID;
  @Input() actionButtonLabel;
  @Input() actionButtonAria;
  @Input() actionButtonClass;

  @Input() focusBack;
  @Input() modalFocus;

  @Output() closeModal = new EventEmitter<object>();

  ngOnInit() {
    document.getElementsByTagName("body")[0].classList.add("overflowHidden");
  }

  close(e) {
    document.getElementsByTagName("body")[0].classList.remove("overflowHidden");
    this.closeModal.emit(this.focusBack);
  }

  findTab(e) {
    e.target.id === "lastModalTab"
      ? document.getElementById("closeButton").focus()
      : false;
    e.target.id === "firstModalTab"
      ? document.getElementById("cancelButton").focus()
      : false;
  }
}
