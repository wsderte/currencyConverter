import { Component } from '@angular/core'
import { IApiData } from 'src/app/models/data.interface'
import { GetCurrencyService } from '../../services/getCurrency/getCurrency.service'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    public leftCurrency?: IApiData
    public rightCurrency?: IApiData

    currencyForm = new FormGroup({
        leftChanger: new FormControl(0),
        rightChanger: new FormControl(0),
        base: new FormControl('USD'),
        secondBase: new FormControl('USD'),
    })

    constructor(private API: GetCurrencyService) {}

    ngOnInit(): void {
        if (this.currencyForm.value.base) {
            this.API.getCurrencyData(this.currencyForm.value.base).subscribe(
                (data) => (this.leftCurrency = data)
            )
        }

        if (this.currencyForm.value.secondBase) {
            this.API.getCurrencyData(
                this.currencyForm.value.secondBase
            ).subscribe((data) => (this.rightCurrency = data))
        }
    }

    changeBase(): void {
        if (this.currencyForm.value.base)
            this.API.getCurrencyData(this.currencyForm.value.base).subscribe(
                (data) => {
                    this.leftCurrency = data
                    this.onInputLeft()
                }
            )
    }

    changeSecondBase(): void {
        if (this.currencyForm.value.secondBase)
            this.API.getCurrencyData(
                this.currencyForm.value.secondBase
            ).subscribe((data) => {
                this.rightCurrency = data
                this.onInputRight()
            })
    }

    onInputLeft() {
        let result: number = 0
        let multiplier: number = 0
        if (this.currencyForm.value.secondBase)
            this.leftCurrency?.rates?.[this.currencyForm.value.secondBase]
                ? (multiplier =
                      this.leftCurrency?.rates?.[
                          this.currencyForm.value.secondBase
                      ])
                : null

        if (this.currencyForm.value.leftChanger) {
            result = +this.currencyForm.value.leftChanger

            if (
                this.currencyForm.value.base !==
                this.currencyForm.value.secondBase
            ) {
                result *= multiplier
            }
        }

        this.currencyForm.patchValue({
            rightChanger: result,
        })
    }

    onInputRight(): void {
        let result: number = 0
        let multiplier: number = 0

        if (this.currencyForm.value.base)
            this.rightCurrency?.rates?.[this.currencyForm.value.base]
                ? (multiplier =
                      this.rightCurrency?.rates?.[this.currencyForm.value.base])
                : null

        if (this.currencyForm.value.rightChanger) {
            result = +this.currencyForm.value.rightChanger

            if (
                this.currencyForm.value.base !==
                this.currencyForm.value.secondBase
            ) {
                result *= multiplier
            }
        }

        this.currencyForm.patchValue({
            leftChanger: result,
        })
    }
}

// const form = new FormGroup<{
//   first: FormControl<string|null>,
//   middle?: FormControl<string|null>, // Middle name is optional.
//   last: FormControl<string|null>,
// }>({
//   first: new FormControl('Nancy'),
//   last: new FormControl('Drew'),
// });
