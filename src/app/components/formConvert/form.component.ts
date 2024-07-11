import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    @Input() isOpen = true;
    
    currentModal: string = 'modal1';

    closeModal() {
      this.isOpen = false;
    }

    showModal(modalName: string) {
        this.currentModal = modalName;
     }
    // ngOnInit(): void {
    //     if (this.currencyForm.value.base) {
    //         this.API.getCurrencyData(this.currencyForm.value.base).subscribe(
    //             (data) => (this.leftCurrency = data)
    //         )
    //     }

    //     if (this.currencyForm.value.secondBase) {
    //         this.API.getCurrencyData(
    //             this.currencyForm.value.secondBase
    //         ).subscribe((data) => (this.rightCurrency = data))
    //     }
    // }

    // changeBase(): void {
    //     if (this.currencyForm.value.base)
    //         this.API.getCurrencyData(this.currencyForm.value.base).subscribe(
    //             (data) => {
    //                 this.leftCurrency = data
    //                 this.onInputLeft()
    //             }
    //         )
    // }

}

