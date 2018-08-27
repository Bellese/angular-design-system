import { Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: "app-plus",
  templateUrl: "./plus.component.html",
  styleUrls: ["./plus.component.css"]
})
export class AppPlus {
    @Input() expand;
    @Input() clicked;

    svgPlusClass;

    ngOnChanges() {
        if (this.clicked) {
            (this.expand) ? this.expanded() : this.retracted();   
        } else {
            this.svgPlusClass = "";
        }
    }

    expanded() {
        this.svgPlusClass = "expand";
    }

    retracted() {
        this.svgPlusClass = "collapse";
    }
}
