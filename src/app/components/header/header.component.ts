import {Component, Input} from "@angular/core"
import { IData } from "src/app/models/header.interface"

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
    @Input() value!: IData
}