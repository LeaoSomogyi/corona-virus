import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/modules/modal-alert/modal-alert.component';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(
        private _modal: NgbModal,
        private _router: Router
    ) { }

    showMessage(message: string): ModalAlertComponent {
        let comp = this.fetchAlertComponent();
        comp.setMessage(message, '');

        return comp;
    };

    showCustomMessage(message: string, icon: string): ModalAlertComponent {
        let comp = this.fetchAlertComponent();
        comp.setMessage(message, icon);

        return comp;
    };

    showSuccess(message: string): ModalAlertComponent {
        let comp = this.fetchAlertComponent();
        comp.setSuccess(message);

        return comp;
    };


    showError(message: string): ModalAlertComponent {
        let comp = this.fetchAlertComponent();
        comp.setError(message);

        return comp;
    };

    showErrorAndRedirect(message: string, route: string = '') {
        let alert = this.showError(message)
        alert.closeExecute.subscribe(() => {
            this._router.navigate([route]);
        });
    }

    private fetchAlertComponent(): ModalAlertComponent {
        let activeModal = this._modal.open(ModalAlertComponent, { centered: true });
        return <ModalAlertComponent>activeModal.componentInstance;
    }
}