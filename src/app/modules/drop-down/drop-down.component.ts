import { Component, Input, EventEmitter, Output, AfterViewInit, OnInit } from "@angular/core";

@Component({
    selector: "app-drop-down",
    templateUrl: "./drop-down.component.html",
    styleUrls: ["./drop-down.component.css"]
})
export class AppDropDown {
    @Input() options;
    @Input() labelName;
    @Input() width;
    @Input() id: number = 1;
    @Input() defaultSelected: number = 0;
    @Input() hintMessage: string;
    @Input() errorMessage: string;
    @Input() error: boolean;
    @Input() dataAutoId: string;
    
    @Output() selectedOption = new EventEmitter<any>();
    
    ngOnInit() {
        if(this.errorMessage) {
            this.error = true;
        }
    }
    
    selectOption(e) {
        this.selectedOption.emit(e.target.value);
    }
}