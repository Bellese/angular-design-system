import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "[app-table-row]",
  templateUrl: "./table-row.component.html",
  styleUrls: ["./table-row.component.css"]
})
export class AppTableRow {
  @Input() dataRow;
  @Input() headers;
  @Input() index;
  @Input() buttonFocus;
  @Output() onOpenModal = new EventEmitter<object>();

  generateArray(obj) {
    return Object.keys(this.headers).map(key => {
      return {
        key: this.headers[key].header.prop,
        value: obj[this.headers[key].header.prop],
        header: this.headers[key].header.value
      };
    });
  }

  openModal(e) {
    let title =
      e.colHeader === "row_Header"
        ? this.dataRow.row_Header.value + ": Details"
        : this.dataRow.row_Header.value + ": " + e.colHeader + " Details";
    this.onOpenModal.emit({ data: e.data, modalTitle: title, e: e.e });
  }
}
