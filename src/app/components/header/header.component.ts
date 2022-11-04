import {Component, Input, OnInit} from "@angular/core"
import { IData } from "src/app/models/header.interface";
import { ITest } from "src/app/models/data.interface";
import { GetCurrencyService } from "../../services/getCurrency/getCurrency.service"

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    public currencyUSD?:  ITest;
    public currencyEUR?: ITest;

    constructor(private API: GetCurrencyService ) {}

    ngOnInit(): void{
        this.API.getCurrencyData("USD").subscribe((data) =>  
           this.currencyUSD = data
        )
        this.API.getCurrencyData("EUR").subscribe((data) => 
           this.currencyEUR = data
        )
    }

    @Input() value!: IData
}
