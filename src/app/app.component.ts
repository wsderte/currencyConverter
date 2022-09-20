import { Component } from '@angular/core';
import { IData } from './models/header.interface';
import {data} from './data/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'value-changer';

  value: IData[] = data
}
