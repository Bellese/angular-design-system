import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class AppModal {

    @Input() modalTitle;
    @Input() modalClass;
    @Input() modalData;
    @Input() actionButton;
    @Input() actionButtonID;
    @Input() actionButtonLabel;
    @Input() actionButtonAria;
    @Input() actionButtonClass;
    
    @Input() focusBack;
    @Input() modalFocus;

    @Output() closeModal = new EventEmitter<object>();
    
    @Output() actionModal = new EventEmitter<object>();
    
    ngOnInit(){
        document.getElementsByTagName("body")[0].classList.add("overflowHidden");
        let hideModal = document.getElementsByClassName("modal-aria-hidden");
        
        for( let x = 0 ; x < hideModal.length ; x++) {
            hideModal[x].setAttribute("aria-hidden", "true");
        }
    }
    
    proceedModal(e) {
        this.actionModal.emit(e);
    }
    
    close(e) {
        document.getElementsByTagName("body")[0].classList.remove("overflowHidden");
        let hideModal = document.getElementsByClassName("modal-aria-hidden");
        
        for( let x = 0 ; x < hideModal.length ; x++) {
            hideModal[x].setAttribute("aria-hidden", "false");
        }
        
        this.closeModal.emit(this.focusBack);
    }
    
    findTab(e) {
        (e.target.id === "lastModalTab") ? document.getElementById("closeButton").focus() : false;
        (e.target.id === "firstModalTab") ? document.getElementById("cancelButton").focus() : false;
    }
}