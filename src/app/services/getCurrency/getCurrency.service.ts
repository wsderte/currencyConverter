import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/internal/Observable"
import { ICurrency } from "src/app/models/currency.interface"


@Injectable()
export class GetCurrencyService {
    private url2: string = "https://api.exchangerate.host/latest?base="
    private url: string = 'https://bank.gov.ua/NBU_Exchange/exchange_site?valcode=USD&json'

    constructor(private http: HttpClient) {}

    getCurrency(): Observable<ICurrency[]> {
        return this.http.get<ICurrency[]>(this.url, {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*'
              })
        })
    }

    getCurrencyData(base: string){
        return this.http.get(this.url2 + base);
    }
}

