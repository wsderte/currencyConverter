import { Component, inject, Input } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms';
import {FloatLabelType} from '@angular/material';
// import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    // @Input() isOpen = true;
    isOpen = true;
    currentModal: string = 'modal1';
    isPickup: boolean = false;
    readonly hideRequiredControl = new FormControl(false);
    readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
    readonly options = inject(FormBuilder).group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    // protected readonly hideRequired = toSignal(this.hideRequiredControl.valueChanges);
    // protected readonly floatLabel = toSignal(
    //   this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    //   {initialValue: 'auto'},
    // );


  onToggleChange() {
    // Handle any additional logic when the toggle changes
    console.log(this.isPickup ? 'самовывоз' : 'доставка');
  }

    closeModal() {
      this.isOpen = !this.isOpen;
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

