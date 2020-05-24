import { Component, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-alert',
    styleUrls: ['./modal-alert.component.css'],
    templateUrl: './modal-alert.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ModalAlertComponent {
    @Input() public iconClass: string;
    @Input() public content: any;
    @Output() public closeExecute = new EventEmitter<any>();
    @Input() public message: string;

    constructor(private modal: NgbActiveModal) { }

    public setMessage(message: string, icon: string): void {
        this.iconClass = icon;
        this.message = message;
    }

    public setSuccess(message: string): void {
        this.iconClass = 'fas fa-check-circle';
        this.message = message;
    }

    public setError(message: string): void {
        this.iconClass = 'fas fa-times-circle';
        this.message = message;
    }

    public close(): void {
        this.closeExecute.emit(this.content);
        this.modal.close();
    }
}