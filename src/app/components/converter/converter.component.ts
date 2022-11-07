// import { NgStyle } from "@angular/common";
import { Component } from '@angular/core'
import { IApiData } from 'src/app/models/data.interface'
import { GetCurrencyService } from '../../services/getCurrency/getCurrency.service'

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
    public input: string = '0'
    public secondInput: string = '0'

    public base: string = 'USD'
    public secondBase: string = 'USD'

    public leftCurrency?: IApiData
    public rightCurrency?: IApiData

    constructor(private API: GetCurrencyService) {}

    ngOnInit(): void {
        this.API.getCurrencyData(this.base).subscribe(
            (data) => (this.leftCurrency = data)
        )
        this.API.getCurrencyData(this.secondBase).subscribe(
            (data) => (this.rightCurrency = data)
        )
    }

    changeBase(arg: string): void {
        this.base = arg
        this.API.getCurrencyData(arg).subscribe((data) => {
            this.leftCurrency = data
            this.changeInput(this.input)
        })
    }

    changeSecondBase(arg: string): void {
        this.secondBase = arg
        this.API.getCurrencyData(arg).subscribe((data) => {
            this.rightCurrency = data
            this.changeSecondInput(this.secondInput)
        })
    }

    changeInput(arg: string): void {
        let result: number
        this.input = arg
        const secondInput: any = document.getElementById('input2')
        let num = 0

        this.leftCurrency?.rates?.[this.secondBase]
            ? (num = this.leftCurrency?.rates?.[this.secondBase])
            : null

        if (this.base !== this.secondBase) {
            result = +arg * num //this.leftCurrency?.rates?.[this.secondBase];
        } else {
            result = +arg
        }

        // console.log(typeof this.leftCurrency.rates[this.secondBase])
        secondInput.value = result
        if (result) this.secondInput = result + ''
    }

    changeSecondInput(arg: string): void {
        let result: number
        this.secondInput = arg
        const input1: any = document.getElementById('input1')

        let num = 0
        this.rightCurrency?.rates?.[this.base]
            ? (num = this.rightCurrency?.rates?.[this.base])
            : null

        if (this.base !== this.secondBase) {
            result = +arg * num // this.rightCurrency.rates[this.base] ;
        } else {
            result = +arg
        }

        input1.value = result
        if (result) this.input = result + ''
    }
}
