import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"


@Injectable()
export class GetCurrencyService {
    private url2: string = "https://api.exchangerate.host/latest?base="

    constructor(private http: HttpClient) {}

    getCurrencyData(base: string){
        return this.http.get(this.url2 + base);
    }
}

